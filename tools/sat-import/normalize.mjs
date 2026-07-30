// One-time normalizer for the raw SAT practice-test imports.
//
//   node normalize.mjs          # writes tools/sat-import/normalized/*.json + report, does NOT touch raw/
//   node normalize.mjs --apply  # additionally regroups into server/.../sat/bank/<skill>.json
//
// What it fixes:
//   1. Globally-unique ids, renumbered per prefix in file order (P4..P11).
//   2. Bare LaTeX (P4-P10) wrapped in \( \) / \[ \]; \newline removed; \le/\ge normalized.
//   3. P11's literal \n turned into spaces (delimited math left as-is).
//   4. Every math span validated through KaTeX (throwOnError) -> reported, never silently emitted.

import fs from 'fs'
import path from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

const HERE = path.dirname(fileURLToPath(import.meta.url))
// katex is installed in web/node_modules; import it by absolute path so this
// script can live outside the web workspace.
const katexUrl = pathToFileURL(path.join(HERE, '..', '..', 'web', 'node_modules', 'katex', 'dist', 'katex.mjs'))
const katex = (await import(katexUrl)).default

const RAW = path.join(HERE, 'raw')
const OUT = path.join(HERE, 'normalized')
const BANK = path.join(HERE, '..', '..', 'server', 'src', 'main', 'resources', 'sat', 'bank')

// The 24 diagnostic questions (one per skill x difficulty), keyed by the stable
// `source` field so the selection survives id renumbering and re-runs. Edit
// diagnostics.json to change the diagnostic set, then re-run --apply.
const DIAG_PATH = path.join(HERE, 'diagnostics.json')
const diagnosticSources = new Set(
  fs.existsSync(DIAG_PATH)
    ? JSON.parse(fs.readFileSync(DIAG_PATH, 'utf8')).map((e) => e.source)
    : [])

const PREFIX_TO_SKILL = {
  arith: 'arithmetic-percentages', alg: 'algebra-equations',
  lin: 'linear-functions', sys: 'systems-of-equations',
  quad: 'quadratics-polynomials', exp: 'exponential-functions',
  stat: 'data-statistics', geo: 'geometry-trigonometry',
}
const MATH_RE = /\\\(([\s\S]+?)\\\)|\\\[([\s\S]+?)\\\]/g

// Sentinel standing in for a space protected inside brackets during tokenization.
// A private-use codepoint that will never appear in the source text.
const NBSP = ''

// Inside math these are TeX-active and must be escaped when they came from prose.
// % is the dangerous one: unescaped it starts a comment and silently eats the line.
const escapeTeX = (t) => t.replace(/(?<!\\)([%&#])/g, '\\$1')

// Literal \n line-separators appear as backslash-n followed by uppercase, digit,
// whitespace, another backslash, or end. Real KaTeX commands (\neq, \nu, \nabla,
// ...) always continue with a lowercase letter, so this leaves them alone.
const stripNL = (s) => s.replace(/\\n(?=[A-Z0-9\s\\]|$)/g, ' ')

const files = fs.readdirSync(RAW)
  .filter((f) => /^practice-test-\d+\.json$/.test(f))
  .sort((a, b) => parseInt(a.match(/\d+/)[0]) - parseInt(b.match(/\d+/)[0]))

// ---------- LaTeX wrapping heuristic (bare strings only) ----------

// Single letters that are almost always English prose here (articles / pronoun /
// Roman numeral), never variables. Everything else single-letter is a variable.
const PROSE_LETTERS = new Set(['a', 'A', 'I', 'O'])

function isMathToken(tok) {
  const core = tok.replace(/^[([{]+|[)\]}.,?;:]+$/g, '') // ignore edge punctuation
  if (core === '') return false
  if (/[\\{}^_=<>|]/.test(tok)) return true              // command, brace, sup/sub, (in)equality, abs
  if (/\d[A-Za-z]|[A-Za-z]\d/.test(core)) return true    // 2x, x2
  if (/^[A-Za-z]$/.test(core)) return !PROSE_LETTERS.has(core) // lone variable, minus articles
  if (/^[-+][A-Za-z]$/.test(tok)) return true            // signed variable -x, +y
  if (/[A-Za-z]\(/.test(core)) return true               // f(x)
  if (/[\w][*/][\w]/.test(core)) return true             // fraction/product 75/300, -60/5, 12*2
  if (/\d%/.test(tok)) return true                       // percent 78%
  // a parenthesized group carrying an operator or digit is math (2(n+p), (x-2)),
  // but a plain word in parens (the hypotenuse) is not.
  if (/[()]/.test(tok) && /[-+*/^_=]|\d/.test(tok.replaceAll(NBSP, ' '))) return true
  return false
}
// A bridge token has no standalone meaning but joins two math tokens: lone operator,
// lone open paren, or a signed number optionally parenthesized / punctuated.
function isBridge(tok) {
  if (/^[+\-*/=<>]$/.test(tok)) return true
  if (/^[([]$/.test(tok)) return true
  return /^[-+]?[([]?[\d.,]+[)\]}.,?;:]*$/.test(tok)
}

// Replace spaces inside balanced brackets of any kind with NBSP so the whitespace
// tokenizer treats \frac{a - b}{c}, \text{ and }, and 2(n + p) as single atoms.
const OPEN = { '{': '}', '(': ')', '[': ']' }
function protectBrackets(s) {
  const stack = []
  let out = ''
  for (const ch of s) {
    if (OPEN[ch]) stack.push(OPEN[ch])
    else if (stack.length && ch === stack[stack.length - 1]) stack.pop()
    out += ch === ' ' && stack.length ? NBSP : ch
  }
  return out
}

function wrapBare(sRaw) {
  const s = stripNL(sRaw.replace(/\\newline/g, ' '))
    .replace(/\\le(?![a-zA-Z])/g, '\\leq')
    .replace(/\\ge(?![a-zA-Z])/g, '\\geq')
    .replace(/(\d)\s+degrees\b/g, '$1^\\circ')   // "66 degrees" -> 66^\circ inside math
    .replace(/\s{2,}/g, ' ')
    .trim()

  const tokens = protectBrackets(s).split(/(\s+)/) // keep whitespace tokens
  const cls = tokens.map((t) =>
    /^\s+$/.test(t) ? 'ws' : isMathToken(t) ? 'M' : isBridge(t) ? 'B' : 'P')

  // Walk maximal runs of {M,B,ws}. A run with at least one real math token becomes
  // one \( ... \) span (trailing numbers/operators ride along); a run of only
  // bridges/whitespace is plain prose and passes through untouched.
  let out = ''
  let i = 0
  while (i < tokens.length) {
    if (cls[i] === 'M' || cls[i] === 'B') {
      let j = i, lastReal = i, hasM = false
      while (j < tokens.length && cls[j] !== 'P') {
        if (cls[j] === 'M' || cls[j] === 'B') { lastReal = j; if (cls[j] === 'M') hasM = true }
        j++
      }
      const body = tokens.slice(i, lastReal + 1).join('').replaceAll(NBSP, ' ')
      if (hasM) {
        const m = body.match(/^(.*?)([.,?;:]+)$/s) // keep sentence punctuation outside math
        const wrap = (t) => `\\(${escapeTeX(t)}\\)`
        out += m ? `${wrap(m[1])}${m[2]}` : wrap(body)
      } else {
        out += body // pure numbers/operators, no variables: leave as prose
      }
      out += tokens.slice(lastReal + 1, j).join('') // trailing whitespace
      i = j
    } else {
      out += tokens[i].replaceAll(NBSP, ' ')
      i++
    }
  }
  return out
}

function normalizeString(s) {
  if (s.includes('\\(') || s.includes('\\[')) {
    // already delimited (P11): just collapse literal \n and stray whitespace
    return stripNL(s).replace(/\s{2,}/g, ' ').trim()
  }
  if (!s.includes('\\') && !/[=<>^_]|[A-Za-z]\(/.test(s)) {
    return s // pure prose, nothing to wrap
  }
  return wrapBare(s)
}

// ---------- validate every math span ----------

const katexFailures = []
const bareLeftover = []
function validate(qid, label, s) {
  const outside = s.replace(MATH_RE, ' ')
  const bare = outside.match(/\\[a-zA-Z]+/g)
  if (bare) bareLeftover.push([qid, label, [...new Set(bare)].join(' '), s])
  MATH_RE.lastIndex = 0
  let m
  while ((m = MATH_RE.exec(s)) !== null) {
    const display = m[2] !== undefined
    const tex = display ? m[2] : m[1]
    try { katex.renderToString(tex, { throwOnError: true, displayMode: display }) }
    catch (e) { katexFailures.push([qid, label, tex, e.message.split('\n')[0]]) }
  }
}

// ---------- run ----------

const counters = {}
const idMap = []
const bySkill = {}
for (const skill of Object.values(PREFIX_TO_SKILL)) bySkill[skill] = []

fs.mkdirSync(OUT, { recursive: true })

for (const file of files) {
  const items = JSON.parse(fs.readFileSync(path.join(RAW, file), 'utf8'))
  const outItems = []
  for (const q of items) {
    const prefix = q.id.split('-')[0]
    counters[prefix] = (counters[prefix] || 0) + 1
    const newId = `${prefix}-${String(counters[prefix]).padStart(4, '0')}`
    if (newId !== q.id) idMap.push([file, q.id, newId])

    const nq = {
      id: newId,
      difficulty: q.difficulty,
      // diagnostic flag comes from the manifest (by stable source), not the raw file
      isDiagnostic: diagnosticSources.has(q.source),
      answerType: q.answerType,
      stem: normalizeString(q.stem),
      options: q.options.map(normalizeString),
      correctIndex: q.correctIndex,
      explanation: normalizeString(q.explanation),
      source: q.source,
    }
    validate(newId, 'stem', nq.stem)
    nq.options.forEach((o, i) => validate(newId, `opt[${i}]`, o))
    validate(newId, 'explanation', nq.explanation)

    outItems.push(nq)
    bySkill[PREFIX_TO_SKILL[prefix]].push(nq)
  }
  fs.writeFileSync(path.join(OUT, file), JSON.stringify(outItems, null, 2) + '\n')
}

// ---------- report ----------

const diagCount = Object.values(bySkill).flat().filter((q) => q.isDiagnostic).length
console.log(`normalized ${files.length} files -> ${OUT}`)
console.log(`ids renumbered: ${idMap.length}`)
console.log(`diagnostic questions marked: ${diagCount} (manifest has ${diagnosticSources.size})`)
console.log(`KaTeX failures: ${katexFailures.length}`)
console.log(`strings with bare LaTeX still outside delimiters: ${bareLeftover.length}`)

if (katexFailures.length) {
  console.log('\n--- KaTeX failures ---')
  for (const [qid, label, tex, msg] of katexFailures.slice(0, 40))
    console.log(`  ${qid} ${label}: «${tex}»\n      ${msg}`)
}
if (bareLeftover.length) {
  console.log('\n--- bare LaTeX left outside delimiters (heuristic missed) ---')
  for (const [qid, label, cmds, s] of bareLeftover.slice(0, 40))
    console.log(`  ${qid} ${label} [${cmds}]: ${s.slice(0, 100)}`)
}

fs.writeFileSync(path.join(OUT, '_id-map.json'), JSON.stringify(idMap, null, 2))

if (process.argv.includes('--apply')) {
  for (const [skill, qs] of Object.entries(bySkill)) {
    fs.writeFileSync(path.join(BANK, `${skill}.json`),
      JSON.stringify({ skillId: skill, questions: qs }, null, 2) + '\n')
  }
  console.log('\n--apply: wrote 8 bank files')
}
