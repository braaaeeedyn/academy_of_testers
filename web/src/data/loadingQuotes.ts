export interface LoadingQuote {
  text: string
  author?: string
}

/** Short, encouraging study/learning quotes shown on loading screens. Kept concise so they fit on
 * one or two lines across themes. */
export const LOADING_QUOTES: LoadingQuote[] = [
  { text: 'The expert in anything was once a beginner.', author: 'Helen Hayes' },
  { text: 'Success is the sum of small efforts repeated day in and day out.', author: 'Robert Collier' },
  { text: 'It always seems impossible until it’s done.', author: 'Nelson Mandela' },
  { text: 'The beautiful thing about learning is that no one can take it away from you.', author: 'B.B. King' },
  { text: 'Don’t watch the clock; do what it does. Keep going.', author: 'Sam Levenson' },
  { text: 'You don’t have to be great to start, but you have to start to be great.', author: 'Zig Ziglar' },
  { text: 'Learning never exhausts the mind.', author: 'Leonardo da Vinci' },
  { text: 'Little by little, one travels far.', author: 'J.R.R. Tolkien' },
  { text: 'Strive for progress, not perfection.' },
  { text: 'The secret of getting ahead is getting started.', author: 'Mark Twain' },
  { text: 'Mistakes are proof that you are trying.' },
  { text: 'Study hard what interests you the most in the most undisciplined, irreverent way possible.', author: 'Richard Feynman' },
  { text: 'A little progress each day adds up to big results.' },
  { text: 'Believe you can and you’re halfway there.', author: 'Theodore Roosevelt' },
  { text: 'Push yourself, because no one else is going to do it for you.' },
  { text: 'The future depends on what you do today.', author: 'Mahatma Gandhi' },
  { text: 'Knowledge is power.', author: 'Francis Bacon' },
  { text: 'Every accomplishment starts with the decision to try.' },
]

/** Returns a random quote. Call inside a `useMemo` so it stays stable for a component’s lifetime. */
export function getRandomLoadingQuote(): LoadingQuote {
  return LOADING_QUOTES[Math.floor(Math.random() * LOADING_QUOTES.length)]
}
