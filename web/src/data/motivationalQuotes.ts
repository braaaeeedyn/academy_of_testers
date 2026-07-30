/**
 * A bank of motivational quotes for the SAT dashboard greeting. One is shown per day,
 * chosen deterministically from the date so it's stable within a day and rotates daily.
 */
export interface Quote {
  text: string
  author: string
}

export const MOTIVATIONAL_QUOTES: Quote[] = [
  { text: 'Success is the sum of small efforts, repeated day in and day out. The score you want is built one practice question at a time.', author: 'Robert Collier' },
  { text: "It always seems impossible until it's done — so keep going, because every problem you work through makes the next one easier.", author: 'Nelson Mandela' },
  { text: "Don't watch the clock; do what it does — keep going. Steady, consistent effort beats last-minute cramming every single time.", author: 'Sam Levenson' },
  { text: 'The expert in anything was once a beginner who refused to give up. Every skill you struggle with today can become a strength.', author: 'Helen Hayes' },
  { text: 'The secret of getting ahead is getting started, and the secret of getting started is breaking your work into small, manageable steps.', author: 'Mark Twain' },
  { text: 'Little by little, one travels far. A few focused questions each day will carry you further than you can imagine by test morning.', author: 'J.R.R. Tolkien' },
  { text: 'Believe you can and you’re halfway there. Confidence grows from preparation, so trust the work you put in and let it show up on test day.', author: 'Theodore Roosevelt' },
  { text: "Practice isn't the thing you do once you're good — it's the thing that makes you good. Show up for it even when it feels hard.", author: 'Malcolm Gladwell' },
  { text: 'You don’t have to be great to start, but you have to start to be great. The first question is always the hardest to begin.', author: 'Zig Ziglar' },
  { text: 'A little progress each day adds up to big results. Don’t underestimate what steady, unglamorous practice can build over weeks.', author: 'Satya Nani' },
  { text: 'The difference between ordinary and extraordinary is that little bit of extra effort you give when you’d rather stop.', author: 'Jimmy Johnson' },
  { text: 'Fall seven times, stand up eight. A wrong answer isn’t a failure — it’s the fastest way to find out what to study next.', author: 'Japanese Proverb' },
  { text: 'Discipline is choosing between what you want now and what you want most. Every study session is a small vote for your future.', author: 'Abraham Lincoln' },
  { text: 'Your future is created by what you do today, not tomorrow. The habits you build this week are the scores you’ll earn later.', author: 'Robert Kiyosaki' },
  { text: 'Strive for progress, not perfection. You don’t need to master everything at once — you just need to be better than yesterday.', author: 'Unknown' },
  { text: 'The harder you work for something, the greater you’ll feel when you achieve it. Let the difficulty be the reason, not the excuse.', author: 'Unknown' },
  { text: 'Doubt kills more dreams than failure ever will. Trust your preparation and give each question your honest, focused attempt.', author: 'Suzy Kassem' },
  { text: 'Every accomplishment starts with the decision to try. Opening your practice today is already the hardest and most important step.', author: 'John F. Kennedy' },
  { text: 'Mistakes are proof that you are trying, and each one you review carefully is a point you’re far less likely to lose on test day.', author: 'Jennifer Lim' },
  { text: 'Push yourself, because no one else is going to do it for you. The effort is yours to give, and so is the reward that follows it.', author: 'Unknown' },
  { text: 'What we learn with pleasure we never forget, so find the curiosity in the problem and the studying will start to feel lighter.', author: 'Alfred Mercier' },
  { text: 'The beautiful thing about learning is that no one can take it away from you — every concept you master is yours to keep for good.', author: 'B.B. King' },
  { text: 'Don’t let what you cannot do interfere with what you can do. Focus on the next question in front of you and let the rest wait.', author: 'John Wooden' },
  { text: 'Great things are done by a series of small things brought together. Your target score is just many small wins added up over time.', author: 'Vincent van Gogh' },
  { text: 'The only way to learn mathematics is to do mathematics. Reading solutions helps, but the real growth happens when you struggle first.', author: 'Paul Halmos' },
  { text: 'Perseverance is not a long race; it is many short races one after another. Treat each study session as its own small victory.', author: 'Walter Elliot' },
  { text: 'Motivation gets you going, but discipline keeps you growing. Some days you won’t feel like practicing — do it anyway, and it counts double.', author: 'John C. Maxwell' },
  { text: 'Focus on the step in front of you, not the whole staircase. The full syllabus is overwhelming; the next question never is.', author: 'Unknown' },
  { text: 'It’s not that I’m so smart, it’s just that I stay with problems longer. Patience with a hard question is a skill you can train.', author: 'Albert Einstein' },
  { text: 'Energy and persistence conquer all things. Talent opens the door, but showing up consistently is what actually walks you through it.', author: 'Benjamin Franklin' },
]

/** Days since the Unix epoch — stable per calendar day in the viewer's local time. */
function epochDay(d: Date): number {
  return Math.floor(new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime() / 86_400_000)
}

/** The quote for a given day (defaults to today), rotating through the whole bank. */
export function quoteForDay(date: Date = new Date()): Quote {
  const len = MOTIVATIONAL_QUOTES.length
  return MOTIVATIONAL_QUOTES[((epochDay(date) % len) + len) % len]
}
