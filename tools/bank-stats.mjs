// Per-unit difficulty stats for all unitBank files.
// Usage: node tools/bank-stats.mjs [slug]
import { readFileSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const bankDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'web', 'src', 'data', 'unitBank')

export function loadBank(file) {
  const src = readFileSync(join(bankDir, file), 'utf8')
  const start = src.indexOf('{', src.indexOf('='))
  let end = src.lastIndexOf('}')
  return JSON.parse(src.slice(start, end + 1))
}

const only = process.argv[2]
const files = readdirSync(bankDir).filter((f) => f.startsWith('ap-') && f.endsWith('.ts'))

let grandGapE = 0, grandGapM = 0, grandGapH = 0, grandUnrated = 0
for (const file of files) {
  const bank = loadBank(file)
  if (only && bank.slug !== only) continue
  console.log(`\n=== ${bank.slug} ===`)
  for (const u of bank.units) {
    const c = { easy: 0, medium: 0, hard: 0, unrated: 0 }
    for (const q of u.questions) c[q.difficulty ?? 'unrated']++
    const gap = ['easy', 'medium', 'hard'].map((d) => Math.max(0, 10 - c[d]))
    grandGapE += gap[0]; grandGapM += gap[1]; grandGapH += gap[2]; grandUnrated += c.unrated
    console.log(
      `  U${u.unitNumber} (${u.questions.length}q): e${c.easy} m${c.medium} h${c.hard} unrated${c.unrated}` +
        (gap.some((g) => g > 0) ? `  NEED e+${gap[0]} m+${gap[1]} h+${gap[2]}` : '  OK')
    )
  }
}
if (!only) console.log(`\nTOTAL unrated=${grandUnrated} | gaps if nothing re-rated: e+${grandGapE} m+${grandGapM} h+${grandGapH}`)
