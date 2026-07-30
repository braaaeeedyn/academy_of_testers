/** URL slug helpers for exam/subject routing (e.g. /ap/calculus-ab). */

/** Exam name -> slug, e.g. "AP" -> "ap", "SAT" -> "sat". */
export function examSlug(name: string): string {
  return name.trim().toLowerCase()
}

/**
 * Subject name -> slug, dropping the leading exam prefix, e.g.
 * "AP Calculus AB" -> "calculus-ab", "SAT Reading and Writing" -> "reading-and-writing".
 */
export function subjectSlug(name: string): string {
  return name
    .replace(/^(AP|SAT)\s+/i, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
