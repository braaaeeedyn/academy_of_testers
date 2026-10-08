#!/usr/bin/env node
// Acceptance checks for the mistake guard / Explain my mistake / Mistake Notebook / Desmos guide /
// study plans / exam logistics work. Plain Node ESM, no dependencies beyond the repo's typescript.
//
//   node web/scripts/acceptance/check.mjs <explain|notebook|desmos|plans|logistics>
//
// Pure TS modules are transpiled with ts.transpileModule and imported from a data: URL, which is
// why they must have no runtime imports. Everything else is a grep-style assertion on source files.
// Exits non-zero on the first failed assertion.
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'

const HERE = dirname(fileURLToPath(import.meta.url))
const WEB = resolve(HERE, '..', '..')
const ROOT = resolve(WEB, '..')
const SRC = join(WEB, 'src')
const require = createRequire(join(WEB, 'package.json'))
const ts = require('typescript')

let passed = 0
function fail(msg) {
  console.error(`FAIL: ${msg}`)
  process.exit(1)
}
function ok(cond, msg) {
  if (!cond) fail(msg)
  passed++
}

const read = (p) => readFileSync(p, 'utf8')
const src = (rel) => read(join(SRC, rel))

async function loadTs(rel) {
  const code = src(rel)
  // A runtime import would fail inside a data: URL; type-only imports are erased by transpilation.
  const out = ts.transpileModule(code, {
    compilerOptions: { target: ts.ScriptTarget.ESNext, module: ts.ModuleKind.ESNext },
  }).outputText
  ok(!/^\s*import\s[^;]*from\s/m.test(out) && !/\bimport\(/.test(out), `${rel} has no runtime imports`)
  return import('data:text/javascript;base64,' + Buffer.from(out).toString('base64'))
}

function routeIn(app, path) {
  return new RegExp(`<Route\\s+path="${path.replace(/[/]/g, '\\/')}"`).test(app)
}
function links(file, path) {
  const s = src(file)
  return s.includes(`'${path}'`) || s.includes(`"${path}"`) || s.includes(`\`${path}`) || s.includes(`${path}?`)
}

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) walk(p, out)
    else if (/\.(ts|tsx)$/.test(name)) out.push(p)
  }
  return out
}

// ---------------------------------------------------------------------------------------------

async function explain() {
  const m = await loadTs('utils/explainMistake.ts')
  ok(m.EXPLAIN_MAX_CHARS === 1000, 'EXPLAIN_MAX_CHARS is 1000')
  const base = {
    subject: 'AP Biology',
    question: 'Which organelle produces most of the ATP in a eukaryotic cell?',
    options: ['Ribosome', 'Mitochondrion', 'Golgi apparatus', 'Lysosome'],
    selectedIndex: 0,
    correctIndex: 1,
    explanation: 'Cellular respiration happens in the mitochondria.',
  }
  const p = m.buildExplainMistakePrompt(base)
  ok(p.length <= 1000, `normal prompt within 1000 chars (got ${p.length})`)
  ok(p.includes('AP Biology'), 'prompt contains the subject')
  for (const l of ['A)', 'B)', 'C)', 'D)']) ok(p.includes(l), `prompt contains option ${l}`)
  ok(/I chose A\b/.test(p), 'prompt names the chosen letter')
  ok(/correct answer is B\b/.test(p), 'prompt names the correct letter')
  ok(p.includes(base.explanation), 'prompt contains a short explanation')
  ok(p.includes(base.question), 'prompt contains the question')
  ok(/why my answer is wrong/.test(p), 'prompt closes with the ask')

  const big = 'x'.repeat(5000)
  const huge = m.buildExplainMistakePrompt({
    subject: 'SAT Math',
    question: big,
    options: [big, big, big, big],
    selectedIndex: 3,
    correctIndex: 2,
    explanation: big,
  })
  ok(huge.length <= 1000, `huge prompt within 1000 chars (got ${huge.length})`)
  ok(huge.includes('SAT Math'), 'huge prompt keeps the subject')
  for (const l of ['A)', 'B)', 'C)', 'D)']) ok(huge.includes(l), `huge prompt keeps option ${l}`)
  ok(/I chose D\b/.test(huge) && /correct answer is C\b/.test(huge), 'huge prompt keeps chosen and correct letters')
  ok(/why my answer is wrong/.test(huge), 'huge prompt keeps the ask')

  const hugeExplOnly = m.buildExplainMistakePrompt({ ...base, explanation: big })
  ok(hugeExplOnly.length <= 1000, 'long explanation is shortened to fit')
  ok(hugeExplOnly.includes(base.question), 'explanation is shortened before the question')

  const ctx = src('context/ChatContext.tsx')
  ok(/export\s+interface\s+ChatDraft\b/.test(ctx), 'ChatContext declares ChatDraft')
  ok(/openChat\s*:\s*\(\s*draft\?\s*:\s*ChatDraft\s*\)/.test(ctx), 'openChat takes an optional draft')
  for (const f of [
    'components/UnitPractice.tsx',
    'components/MockExam.tsx',
    'components/InterleavedReview.tsx',
    'components/adaptive/QuestionCard.tsx',
    'pages/MistakeNotebookPage.tsx',
  ]) {
    ok(/import\s+ExplainMistakeButton\s+from/.test(src(f)), `${f} imports ExplainMistakeButton`)
    ok(/<ExplainMistakeButton\b/.test(src(f)), `${f} renders ExplainMistakeButton`)
  }
  ok(/\bdraft\b/.test(src('components/AiChat.tsx')), 'AiChat.tsx references draft')
}

async function notebook() {
  const m = await loadTs('utils/mistakeNotebook.ts')
  const DAY = 86_400_000
  ok(m.DAY_MS === DAY, 'DAY_MS')
  ok(JSON.stringify(m.REVIEW_INTERVALS_DAYS) === '[1,3,7,14,30]', 'REVIEW_INTERVALS_DAYS')
  ok(m.mistakeKey('ap', 'AP Biology', 12) === 'ap:AP Biology:12', 'AP key')
  ok(m.mistakeKey('sat', 'SAT Math', 'alg-001') === 'sat:alg-001', 'SAT key')

  const now = 1_800_000_000_000
  const miss = { source: 'ap', subject: 'AP Biology', questionId: 7 }
  const empty = []
  const one = m.recordMiss(empty, miss, now)
  ok(empty.length === 0, 'recordMiss does not mutate its input')
  ok(one.length === 1 && one[0].box === 0 && one[0].misses === 1, 'first miss is box 0, misses 1')
  ok(one[0].dueAt === now + DAY, 'first due = now + 1 day')

  const frozen = JSON.stringify(one)
  const later = now + 5 * DAY
  const promoted = m.recordReview(one, one[0].key, true, now + DAY)
  ok(JSON.stringify(one) === frozen, 'recordReview does not mutate its input')
  const again = m.recordMiss(promoted, miss, later)
  ok(again.length === 1, 'recordMiss dedupes')
  ok(again[0].box === 0 && again[0].dueAt === later + DAY && again[0].misses === 2, 'repeat miss resets box and counts')
  ok(JSON.stringify(one) === frozen, 'recordMiss on existing does not mutate')

  // full correct sequence: 1 (from the miss), then 3, 7, 14, 30, then graduate
  let entries = m.recordMiss([], miss, now)
  const key = entries[0].key
  let t = now
  const gaps = [entries[0].dueAt - t]
  for (let i = 0; i < 4; i++) {
    t = entries[0].dueAt
    entries = m.recordReview(entries, key, true, t)
    ok(entries.length === 1, `still in notebook after correct review ${i + 1}`)
    gaps.push(entries[0].dueAt - t)
  }
  ok(JSON.stringify(gaps.map((g) => g / DAY)) === '[1,3,7,14,30]', `intervals walk 1,3,7,14,30 (got ${gaps.map((g) => g / DAY)})`)
  entries = m.recordReview(entries, key, true, entries[0].dueAt)
  ok(entries.length === 0, 'correct in the last box graduates')

  let w = m.recordMiss([], miss, now)
  w = m.recordReview(w, key, true, now + DAY)
  w = m.recordReview(w, key, true, now + 4 * DAY)
  const wrong = m.recordReview(w, key, false, now + 11 * DAY)
  ok(wrong[0].box === 0 && wrong[0].dueAt === now + 12 * DAY && wrong[0].misses === 2, 'wrong review resets to box 0')

  let many = []
  many = m.recordMiss(many, { source: 'ap', subject: 'S', questionId: 1 }, now + 2 * DAY)
  many = m.recordMiss(many, { source: 'ap', subject: 'S', questionId: 2 }, now)
  many = m.recordMiss(many, { source: 'sat', subject: 'SAT Math', questionId: 'q3' }, now + 10 * DAY)
  const snapshot = JSON.stringify(many)
  const due = m.dueEntries(many, now + 3 * DAY)
  ok(due.length === 2, 'dueEntries filters to due entries')
  ok(due[0].questionId === '2' && due[1].questionId === '1', 'dueEntries sorts by dueAt ascending')
  ok(JSON.stringify(many) === snapshot, 'dueEntries does not mutate')

  const allowed = new Set(['key', 'source', 'subject', 'questionId', 'box', 'dueAt', 'addedAt', 'lastMissedAt', 'misses'])
  const banned = ['correctIndex', 'correctAnswer', 'explanation', 'options', 'stem', 'question']
  for (const e of [...many, ...wrong, ...again]) {
    for (const k of Object.keys(e)) {
      ok(allowed.has(k), `entry field ${k} is a reference field`)
      ok(!banned.includes(k), `entry has no ${k}`)
    }
  }

  for (const f of [
    'components/UnitPractice.tsx',
    'components/MockExam.tsx',
    'components/InterleavedReview.tsx',
    'components/adaptive/AdaptiveSession.tsx',
  ]) {
    ok(/\baddMistake\(/.test(src(f)), `${f} calls addMistake`)
  }
  const app = src('App.tsx')
  ok(routeIn(app, '/notebook'), 'route /notebook in App.tsx')
  ok(links('pages/ExamHubPage.tsx', '/notebook'), 'ExamHubPage links /notebook')
  ok(links('pages/SatHubPage.tsx', '/notebook'), 'SatHubPage links /notebook')

  const ctrl = read(join(ROOT, 'server/src/main/java/com/aot/sat/controller/SatAdaptiveController.java'))
  ok(ctrl.includes('"/review/{questionId}"'), 'controller maps /review/{questionId}')
  ok(ctrl.includes('"/review/{questionId}/check"'), 'controller maps /review/{questionId}/check')
  const svc = read(join(ROOT, 'server/src/main/java/com/aot/sat/service/MistakeReviewService.java'))
  for (const s of ['persist(', 'initialize(', '.save(', 'recordAttempt']) {
    ok(!svc.includes(s), `MistakeReviewService does not call ${s}`)
  }

  const store = src('utils/mistakeNotebookStore.ts')
  const setItems = store.match(/localStorage\.setItem\([^\n]*/g) ?? []
  ok(setItems.length === 1, 'mistakeNotebookStore has a single localStorage write')
  ok(/setItem\(STORAGE_KEY,\s*JSON\.stringify\(entries\.map\(sanitize\)\)\)/.test(setItems[0]), 'the write stores only sanitized entries')
  const saves = store.match(/saveNotebook\(([^\n]*)\)/g) ?? []
  for (const s of saves) {
    if (/^saveNotebook\(entries: /.test(s)) continue
    ok(/saveNotebook\((recordMiss|recordReview)\(|saveNotebook\(next\)/.test(s), `save writes recordMiss/recordReview output: ${s}`)
  }
  const fields = /ENTRY_FIELDS[^=]*=\s*\[([^\]]*)\]/.exec(store)
  ok(!!fields, 'store declares ENTRY_FIELDS')
  const listed = fields[1].match(/'([^']+)'/g).map((f) => f.slice(1, -1))
  ok(listed.every((f) => allowed.has(f)), 'sanitize copies only reference fields')
  ok(!/correctIndex|explanation|options|stem/.test(store), 'store never mentions question content fields')
  for (const f of walk(SRC)) {
    const s = read(f)
    if (!s.includes('aot.mistakeNotebook')) continue
    ok(f.endsWith('mistakeNotebookStore.ts'), `only the store touches the notebook key (${f})`)
  }
}

async function desmos() {
  const m = await loadTs('data/satDesmosGuide.ts')
  const ids = m.DESMOS_GUIDE.sections.map((s) => s.id)
  for (const id of ['graphing-systems', 'vertex-and-zeros', 'regression', 'sliders', 'tables', 'checking-answers']) {
    const s = m.DESMOS_GUIDE.sections.find((x) => x.id === id)
    ok(!!s, `desmos section ${id}`)
    ok(s.steps.length >= 3, `desmos section ${id} has >= 3 steps`)
  }
  ok(new Set(ids).size === ids.length, 'desmos section ids are unique')
  const data = src('data/satDesmosGuide.ts')
  ok(!/\.png|\.jpg|\.svg|<img|http/i.test(data), 'desmos data has no images or URLs')
  ok(routeIn(src('App.tsx'), '/sat/prep/desmos'), 'route /sat/prep/desmos in App.tsx')
  ok(links('pages/SatPrepPage.tsx', '/sat/prep/desmos'), 'SatPrepPage links /sat/prep/desmos')
}

async function plans() {
  const m = await loadTs('utils/studyPlan.ts')
  ok(m.weeksUntil('2027-05-03', '2027-04-05') === 4, 'weeksUntil 4 weeks')
  ok(m.weeksUntil('2027-05-03', '2027-05-03') === 0, 'weeksUntil same day is 0')
  ok(m.weeksUntil('2027-05-03', '2027-05-02') === 1, 'weeksUntil one day is 1')
  ok(m.weeksUntil('2027-05-03', '2027-06-01') === 0, 'weeksUntil past is 0')
  ok(m.buildWeekPlan('2027-05-03', '2027-05-03', [{ id: 'a', label: 'A' }]).length === 0, 'W=0 -> empty plan')

  const DAY = 86_400_000
  const today = '2026-10-07'
  const t0 = Date.UTC(2026, 9, 7)
  for (const n of [1, 8, 9, 15]) {
    const topics = Array.from({ length: n }, (_, i) => ({ id: `t${i}`, label: `Topic ${i}` }))
    for (let W = 1; W <= 40; W++) {
      const exam = new Date(t0 + (7 * (W - 1) + 3) * DAY).toISOString().slice(0, 10)
      ok(m.weeksUntil(exam, today) === W, `fixture W=${W}`)
      const plan = m.buildWeekPlan(exam, today, topics)
      const tag = `W=${W} n=${n}`
      ok(plan.length === W, `${tag}: plan length`)
      plan.forEach((wk, i) => {
        ok(wk.index === i, `${tag}: index ${i}`)
        ok(wk.startIso === new Date(t0 + 7 * i * DAY).toISOString().slice(0, 10), `${tag}: week ${i} start`)
      })
      ok(plan[W - 1].kind === 'final', `${tag}: last week is final`)
      if (W >= 6) ok(plan[W - 2].kind === 'mock', `${tag}: week W-2 is mock`)
      if (W >= 2) {
        const learn = plan.filter((w) => w.kind === 'learn')
        ok(learn.every((w) => w.topics.length > 0), `${tag}: no empty learn week`)
        const order = learn.flatMap((w) => w.topics.map((t) => t.id))
        ok(JSON.stringify(order) === JSON.stringify(topics.map((t) => t.id)), `${tag}: every topic once, in order`)
        const sizes = learn.map((w) => w.topics.length)
        ok(Math.max(...sizes) - Math.min(...sizes) <= 1, `${tag}: learn group sizes differ by <= 1`)
        for (const w of plan) ok(['learn', 'review', 'mock', 'final'].includes(w.kind), `${tag}: kind`)
      }
    }
  }

  const app = src('App.tsx')
  ok(routeIn(app, '/ap/study-plan'), 'route /ap/study-plan')
  ok(routeIn(app, '/sat/study-plan'), 'route /sat/study-plan')
  ok(links('pages/ApPlannerPage.tsx', '/ap/study-plan'), 'ApPlannerPage links /ap/study-plan')
  ok(links('pages/SatHubPage.tsx', '/sat/study-plan'), 'SatHubPage links /sat/study-plan')
  for (const f of walk(SRC)) ok(!read(f).includes('Math.exp'), `no Math.exp in ${f}`)
}

async function logistics() {
  const m = await loadTs('data/examLogistics.ts')
  const want = {
    ap: ['bluebook', 'what-to-bring', 'test-day', 'scores', 'college-credit', 'accommodations', 'sending-scores'],
    sat: ['bluebook', 'what-to-bring', 'test-day', 'scores', 'accommodations', 'sending-scores'],
  }
  for (const exam of ['ap', 'sat']) {
    const g = m.EXAM_LOGISTICS[exam]
    ok(!!g, `${exam} guide present`)
    ok(typeof g.officialUrl === 'string' && g.officialUrl.length > 0, `${exam} officialUrl set`)
    for (const id of want[exam]) {
      const s = g.sections.find((x) => x.id === id)
      ok(!!s && s.items.length > 0, `${exam} section ${id}`)
    }
  }
  const data = src('data/examLogistics.ts')
  const urls = data.match(/https?:\/\/[^\s'"`)]+/g) ?? []
  ok(urls.length > 0, 'logistics data has links')
  for (const u of urls) {
    let host = ''
    try {
      const parsed = new URL(u)
      ok(parsed.protocol === 'https:', `https only: ${u}`)
      host = parsed.hostname
    } catch {
      fail(`unparseable URL ${u}`)
    }
    ok(host === 'collegeboard.org' || host.endsWith('.collegeboard.org'), `collegeboard.org host: ${u}`)
  }
  ok(!/\b(19|20)\d{2}\b/.test(data), 'no hardcoded years in logistics data')
  ok(
    !/(January|February|March|April|May|June|July|August|September|October|November|December) \d{1,2}/.test(data),
    'no hardcoded calendar dates in logistics data',
  )
  const app = src('App.tsx')
  ok(routeIn(app, '/ap/logistics'), 'route /ap/logistics')
  ok(routeIn(app, '/sat/logistics'), 'route /sat/logistics')
  ok(links('pages/ExamHubPage.tsx', '/ap/logistics'), 'ExamHubPage links /ap/logistics')
  ok(links('pages/SatHubPage.tsx', '/sat/logistics'), 'SatHubPage links /sat/logistics')
}

const groups = { explain, notebook, desmos, plans, logistics }
const group = process.argv[2]
if (!groups[group]) {
  console.error(`usage: node check.mjs <${Object.keys(groups).join('|')}>`)
  process.exit(2)
}
await groups[group]()
console.log(`PASS ${group} (${passed} assertions)`)
