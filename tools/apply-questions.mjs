// Splice authored questions into a unitBank file, preserving the exact TS+JSON format.
//
// Usage:
//   node tools/apply-questions.mjs <slug> <questions.json>
// where questions.json is: { "<unitNumber>": [ {question objects...}, ... ], ... }
// Units present in the JSON have their `questions` array fully REPLACED.
//
// Or round-trip test (rewrites file identically):
//   node tools/apply-questions.mjs --roundtrip <slug>
import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const bankDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'web', 'src', 'data', 'unitBank')

function fileForSlug(slug) {
  const files = readdirSync(bankDir)
  const f = files.find((x) => x.endsWith('.ts') && x !== 'types.ts' && x !== 'index.ts' && x !== 'lookup.ts' && loadRaw(x).bank.slug === slug)
  if (!f) throw new Error(`No bank file for slug ${slug}`)
  return f
}

function loadRaw(file) {
  const src = readFileSync(join(bankDir, file), 'utf8')
  const eq = src.indexOf('=')
  const start = src.indexOf('{', eq)
  const end = src.lastIndexOf('}')
  const constName = src.slice(src.indexOf('const ') + 6, eq).replace(/:.*$/s, '').trim()
  const bank = JSON.parse(src.slice(start, end + 1))
  return { constName, bank, header: src.slice(0, src.indexOf('export const')) }
}

function serialize({ constName, bank, header }) {
  return `${header}export const ${constName}: SubjectUnitBank = ${JSON.stringify(bank, null, 2)}\n`
}

const args = process.argv.slice(2)
if (args[0] === '--roundtrip') {
  const file = fileForSlug(args[1])
  const parsed = loadRaw(file)
  const out = serialize(parsed)
  const orig = readFileSync(join(bankDir, file), 'utf8')
  console.log(out === orig ? 'ROUNDTRIP OK (byte-identical)' : `ROUNDTRIP DIFF (orig ${orig.length} vs new ${out.length})`)
  process.exit(0)
}

const [slug, jsonPath] = args
const file = fileForSlug(slug)
const parsed = loadRaw(file)
const newQuestions = JSON.parse(readFileSync(jsonPath, 'utf8'))
let replaced = 0
for (const u of parsed.bank.units) {
  const key = String(u.unitNumber)
  if (newQuestions[key]) {
    u.questions = newQuestions[key]
    replaced++
  }
}
writeFileSync(join(bankDir, file), serialize(parsed))
console.log(`Wrote ${file}: replaced ${replaced} unit(s).`)
