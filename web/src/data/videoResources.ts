/**
 * Curated video resources per AP subject.
 *
 * Each subject has exactly four entries, always in this order:
 *   1. General Prep   2. MCQ   3. FRQ   4. Topic Playlist
 *
 * Keys are the subject names as stored in the `subjects` table, so
 * `AP Government` and `AP Physics C: E&M` use the DB spelling rather than
 * their full College Board names.
 *
 * Entries are raw URLs; `parseVideoUrl` decides whether each one is an
 * embeddable video, an embeddable playlist, or an external page that has to
 * open in a new tab.
 */

export const VIDEO_SLOTS = [
  {
    id: 'general-prep',
    label: 'General Prep',
    description: 'Full-course review and exam-day overview.',
  },
  {
    id: 'mcq',
    label: 'MCQ',
    description: 'Strategy for the multiple-choice section.',
  },
  {
    id: 'frq',
    label: 'FRQ',
    description: 'Walkthroughs of the free-response section.',
  },
  {
    id: 'topic-playlist',
    label: 'Topic Playlist',
    description: 'Unit-by-unit deep dives.',
  },
] as const

export type VideoSlotId = (typeof VIDEO_SLOTS)[number]['id']

/** Four URLs per subject, positionally matching VIDEO_SLOTS. */
type VideoQuad = readonly [string, string, string, string]

export const SUBJECT_VIDEOS: Record<string, VideoQuad> = {
  // Capstone Diploma Program
  'AP Seminar': [
    'https://www.youtube.com/watch?v=KIjseeOJDtI',
    'https://www.youtube.com/watch?v=n5oPlSlMXVI',
    'https://www.youtube.com/watch?v=iOznvk_xd7M',
    'https://www.youtube.com/playlist?list=PLq9Yy9gQrkAwFVg49QZj75fvTVmnVBQdZ',
  ],
  'AP Research': [
    'https://www.youtube.com/watch?v=k-3G03VNBAg',
    'https://www.youtube.com/watch?v=EzH-WmHPoCM',
    'https://www.youtube.com/watch?v=zIYC6zG265E',
    'https://www.youtube.com/watch?v=lw8HPXJP1VA',
  ],

  // Arts
  'AP Art History': [
    'https://www.youtube.com/watch?v=46YIj6fgC8k',
    'https://www.youtube.com/watch?v=R0UW9pCUk2I',
    'https://www.youtube.com/watch?v=M2bvq8Ii_aE',
    'https://www.youtube.com/playlist?list=PLbEekN1fVPucxwCn1pM4zLviin2blEvMH',
  ],
  'AP Music Theory': [
    'https://www.youtube.com/watch?v=GWIMqqVV1L4',
    'https://www.youtube.com/watch?v=GWIMqqVV1L4',
    'https://www.youtube.com/watch?v=ddnwsqgisZk',
    'https://www.youtube.com/watch?v=6mEc3ohVsUw',
  ],

  // English
  'AP English Language': [
    'https://www.youtube.com/watch?v=-Z5uZUIP58g',
    'https://www.youtube.com/watch?v=HKTOdKv0ev0',
    'https://www.youtube.com/watch?v=HKTOdKv0ev0',
    'https://www.youtube.com/playlist?list=PLRC2dgq_mKP_qnXq0KC_XORwTzvzYO27N',
  ],
  'AP English Literature': [
    'https://www.youtube.com/watch?v=p56GRw_yYIg',
    'https://www.youtube.com/watch?v=39Q2zT1Zxb8',
    'https://www.youtube.com/watch?v=l6t9_x6BNQ0',
    'https://www.youtube.com/playlist?list=PLCEja84uspXt_pvx_RHMAsrSATBeCy-h5',
  ],

  // History & Social Sciences
  'AP African American Studies': [
    'https://www.youtube.com/watch?v=kxSmVs97DUE',
    'https://www.gilderlehrman.org/ap-african-american-studies/practice-questions',
    'https://www.youtube.com/watch?v=IHDsTD5Rdpc',
    'https://www.youtube.com/playlist?list=PLd28_-fZzSnCqYe1nYmUU35cjh2MUAffl',
  ],
  'AP Comparative Government': [
    'https://www.youtube.com/watch?v=vh4jhR52Vww',
    'https://www.youtube.com/watch?v=IlODKkAN8Tc',
    'https://www.youtube.com/watch?v=ANxlD55AWhg',
    'https://www.youtube.com/watch?v=OoOzCK4EyQs',
  ],
  'AP European History': [
    'https://www.youtube.com/watch?v=HwoG39xc2BM',
    'https://www.youtube.com/watch?v=Tl1rEIivUPg',
    'https://www.youtube.com/watch?v=IHDsTD5Rdpc',
    'https://www.youtube.com/playlist?list=PLfzs_X6OQBOxudw-bxvxBuTWvh6bwaVhQ',
  ],
  'AP Human Geography': [
    'https://www.youtube.com/watch?v=6j8oq6Hw9vM',
    'https://www.youtube.com/watch?v=7bEKEVnE3b0',
    'https://www.youtube.com/watch?v=_N3qdan2tRU',
    'https://www.youtube.com/playlist?list=PL-R0qM-A09uy3T23FMyLu6CjxMu-QtAsC',
  ],
  'AP Macroeconomics': [
    'https://www.youtube.com/watch?v=MKO1icFVtDc',
    'https://www.youtube.com/watch?v=2wXB9bvREe0',
    'https://www.youtube.com/watch?v=ZMX7QMi9qUU',
    'https://www.youtube.com/watch?v=jLhuJlRAIp8',
  ],
  'AP Microeconomics': [
    'https://www.youtube.com/watch?v=1UxA6JzoT-4',
    'https://www.youtube.com/watch?v=KcxI4ZtWrZY',
    'https://www.youtube.com/watch?v=4MPvDsnbZ4M',
    'https://www.youtube.com/watch?v=Id-BG6TxMUY',
  ],
  'AP Psychology': [
    'https://www.youtube.com/watch?v=uBMsB7ycHFU',
    'https://www.youtube.com/watch?v=yJ0UVln5Kgg',
    'https://www.youtube.com/watch?v=LNOISwB_xbM',
    'https://www.youtube.com/watch?v=4yvfd8aoUBc',
  ],
  'AP Government': [
    'https://www.youtube.com/watch?v=qCi5MjOOHrE',
    'https://www.youtube.com/watch?v=mwIy8NpBlZc',
    'https://www.youtube.com/watch?v=rN4CJBxAWiU',
    'https://www.youtube.com/playlist?list=PLFtaFcyvOBHk_AY_LUcizHHGbEodHkeyx',
  ],
  'AP US History': [
    'https://www.youtube.com/watch?v=RtNtDc3WHoc',
    'https://www.youtube.com/watch?v=ymc3wuS0ubc',
    'https://www.youtube.com/watch?v=IHDsTD5Rdpc',
    'https://www.youtube.com/playlist?list=PLZ4FvDLDh6bwBp549i067WQWFa7THPHNm',
  ],
  'AP World History': [
    'https://www.youtube.com/watch?v=HYmYrFFWffw',
    'https://www.youtube.com/watch?v=yWcVwI3ZhPk',
    'https://www.youtube.com/watch?v=IHDsTD5Rdpc',
    'https://www.youtube.com/watch?v=Q5WHoq-YxFE',
  ],

  // Math
  'AP Calculus AB': [
    'https://www.youtube.com/watch?v=VTDlgnIGeiQ',
    'https://www.youtube.com/watch?v=pKk-4f2KpJQ',
    'https://www.youtube.com/watch?v=xRiUf-f7mDY',
    'https://www.youtube.com/playlist?list=PLI3_KPCoxoPhlX-eaH1SbKWyKy_7PNHfm',
  ],
  'AP Calculus BC': [
    'https://www.youtube.com/watch?v=Nms69Z_FiUc',
    'https://www.youtube.com/watch?v=IVH-0C1pKho',
    'https://www.youtube.com/watch?v=qGeNTG5H2is',
    'https://www.youtube.com/playlist?list=PLI3_KPCoxoPhjl2sG-4OQRbJV9iXiPrxJ',
  ],
  'AP Precalculus': [
    'https://www.youtube.com/watch?v=-18qSbIbVNw',
    'https://www.youtube.com/watch?v=U9ym6d0ObEs',
    'https://www.youtube.com/watch?v=sVNkO9Tq0hs',
    'https://www.youtube.com/playlist?list=PL6334s8hsQG3eM5DYD_fJTyP87WYmU3ud',
  ],
  'AP Statistics': [
    'https://www.youtube.com/watch?v=eu3PjeVBUQE',
    'https://www.youtube.com/watch?v=72_y8QKeN64',
    'https://www.youtube.com/playlist?list=PL6334s8hsQG1AlgwBywmedz4vh3dGquaG',
    'https://www.youtube.com/playlist?list=PL6334s8hsQG0-paS6qXI5_Mt7gsfZwoE9',
  ],

  // Computer Science
  'AP Computer Science A': [
    'https://www.youtube.com/watch?v=_mClihsGtjY',
    'https://www.youtube.com/watch?v=rIz1WvwOq0I',
    'https://www.youtube.com/watch?v=W4D2YBNvWts',
    'https://www.youtube.com/playlist?list=PLmpmyPywZ443PFI8YF3ZMmoEcRfxXckdH',
  ],
  'AP Computer Science Principles': [
    'https://www.youtube.com/watch?v=wb3taZ5bjzw',
    'https://www.youtube.com/watch?v=Q8-GMHH_fhA',
    'https://www.youtube.com/watch?v=2ez4PP3pgnc',
    'https://www.youtube.com/playlist?list=PLySgMiWoycp0FNIM9f0xfIHNUipTpn_RS',
  ],

  // Sciences
  'AP Biology': [
    'https://www.youtube.com/watch?v=OMviZynkN34',
    'https://www.youtube.com/watch?v=ewRPKwZ-aEs',
    'https://www.youtube.com/watch?v=hs9UgKjb0RE',
    'https://www.youtube.com/playlist?list=PLfyZtYYF2oFNZkJcZ3SkF2hRaGDV5e30G',
  ],
  'AP Chemistry': [
    'https://www.youtube.com/watch?v=o4myTMguET4',
    'https://www.youtube.com/watch?v=Ajk3FA7j7hQ',
    'https://www.youtube.com/playlist?list=PLtz4W54HGyRRAQpCuI_9svIuONBiKXENV',
    'https://www.youtube.com/playlist?list=PLI3_KPCoxoPgN6gtQQivXZsSXRQbktFUV',
  ],
  'AP Environmental Science': [
    'https://www.youtube.com/watch?v=dS75ZbVnpyQ',
    'https://www.youtube.com/watch?v=8Hz4tV69TMk',
    'https://www.youtube.com/playlist?list=PLlk-I8-VuM_t2Wb9ZpcgElhLBdDQmgtFZ',
    'https://www.youtube.com/playlist?list=PLllVwaZQkS2qK4Z6xBVDRak8an1-kqsgm',
  ],
  'AP Physics 1': [
    'https://www.youtube.com/watch?v=JKWWspsgwNY',
    'https://www.youtube.com/watch?v=Dj7aOrsLBMM',
    'https://www.youtube.com/playlist?list=PLHc_qtyRpfY3GP-z63Bx9q-_OXhN-dWNl',
    'https://www.youtube.com/playlist?list=PLPyapQSxH6mb62DDbqhnHrXlriWlUjLdY',
  ],
  'AP Physics 2': [
    'https://www.youtube.com/watch?v=PTqRql_GxgQ',
    'https://www.youtube.com/watch?v=nP4GXaRkOJQ',
    'https://www.youtube.com/watch?v=QEM0i3vvxH8',
    'https://www.youtube.com/playlist?list=PLI3_KPCoxoPg3sVLKYNRPtL5DV_tUFFfu',
  ],
  'AP Physics C: Mechanics': [
    'https://www.youtube.com/watch?v=L_pqHYiNguE',
    'https://www.youtube.com/watch?v=Co5rh9DfhcE',
    'https://www.youtube.com/watch?v=EPhlAb2c1kQ',
    'https://www.youtube.com/playlist?list=PLI3_KPCoxoPhe7fKgghhv-9Qi2N73CncY',
  ],
  'AP Physics C: E&M': [
    'https://www.youtube.com/watch?v=XmoO6YO7u4c',
    'https://www.youtube.com/watch?v=5Tqr1GXBZOE',
    'https://www.youtube.com/watch?v=vNHumbOzvYU',
    'https://www.youtube.com/playlist?list=PLI3_KPCoxoPjSKoJ59KMmx_nS6KCAV1zH',
  ],
}

/**
 * Some subjects aren't assessed with a standard MCQ/FRQ pair, so the default
 * slot labels would be actively wrong. These override the label and blurb
 * per slot while keeping the same four positions.
 */
const SUBJECT_SLOT_OVERRIDES: Record<
  string,
  Partial<Record<VideoSlotId, { label: string; description: string }>>
> = {
  'AP Seminar': {
    mcq: {
      label: 'End-of-Course Exam',
      description: 'Parts A & B of the end-of-course exam.',
    },
    frq: {
      label: 'IWA',
      description: 'The Individual Written Argument performance task.',
    },
    'topic-playlist': {
      label: 'Topic & Skills Playlist',
      description: 'Unit-by-unit deep dives.',
    },
  },
  'AP Research': {
    'general-prep': {
      label: 'Course Overview',
      description: 'What the course asks of you, start to finish.',
    },
    mcq: {
      label: 'Choosing a Research Method',
      description: 'Picking a method that fits your question.',
    },
    frq: {
      label: 'Academic Paper: Literature Review',
      description: 'General academic-writing guidance, not AP-specific.',
    },
    'topic-playlist': {
      label: 'Academic Paper: Full Structure',
      description: 'General academic-writing guidance, not AP-specific.',
    },
  },
  'AP Computer Science Principles': {
    frq: {
      label: 'Create Performance Task',
      description: 'Walkthrough of the Create Performance Task.',
    },
  },
  'AP African American Studies': {
    mcq: {
      label: 'MCQ',
      description: 'No dedicated MCQ drill video exists yet — the course is new.',
    },
    frq: {
      label: 'DBQ Writing',
      description: 'Shares a rubric family with APUSH, Euro, and World.',
    },
  },
}

/** Shown above the video grid to explain a subject's non-standard assessment. */
export const SUBJECT_VIDEO_NOTES: Record<string, string> = {
  'AP Seminar':
    'AP Seminar has no MCQ or FRQ. It is assessed through performance tasks plus an end-of-course exam.',
  'AP Research':
    'AP Research has no MCQ or FRQ. It is assessed through a 4,000–5,000 word academic paper plus a presentation and oral defense.',
  'AP Computer Science Principles':
    'AP CSP has an MCQ but no FRQ. The written component is the Create Performance Task, completed during the course rather than on exam day.',
  'AP African American Studies':
    'AP African American Studies has an MCQ, but its written section is an SAQ and DBQ rather than a standard FRQ.',
}

export type ParsedVideo =
  | { kind: 'video'; id: string; embedUrl: string; thumbnailUrl: string; url: string }
  | { kind: 'playlist'; id: string; embedUrl: string; url: string }
  | { kind: 'external'; host: string; url: string }

/**
 * Classify a resource URL. Only YouTube videos and playlists can be embedded;
 * anything else has to open in a new tab because third-party pages send
 * X-Frame-Options and would render as a blank iframe.
 */
export function parseVideoUrl(url: string): ParsedVideo {
  let parsed: URL
  try {
    parsed = new URL(url)
  } catch {
    return { kind: 'external', host: url, url }
  }

  const host = parsed.hostname.replace(/^www\./, '')
  const isYouTube = host === 'youtube.com' || host === 'm.youtube.com' || host === 'youtu.be'

  if (isYouTube) {
    const listId = parsed.searchParams.get('list')
    if (listId && parsed.pathname === '/playlist') {
      return {
        kind: 'playlist',
        id: listId,
        embedUrl: `https://www.youtube-nocookie.com/embed/videoseries?list=${listId}`,
        url,
      }
    }

    const videoId =
      host === 'youtu.be' ? parsed.pathname.slice(1) : parsed.searchParams.get('v')
    if (videoId) {
      return {
        kind: 'video',
        id: videoId,
        embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}`,
        thumbnailUrl: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
        url,
      }
    }
  }

  return { kind: 'external', host, url }
}

export interface SubjectVideo {
  slotId: VideoSlotId
  label: string
  description: string
  source: ParsedVideo
}

/** Returns the four videos for a subject, or undefined if none are curated. */
export function getVideosBySubjectName(name: string): SubjectVideo[] | undefined {
  const urls = SUBJECT_VIDEOS[name]
  if (!urls) return undefined

  const overrides = SUBJECT_SLOT_OVERRIDES[name]

  return VIDEO_SLOTS.map((slot, i) => {
    const override = overrides?.[slot.id]
    return {
      slotId: slot.id,
      label: override?.label ?? slot.label,
      description: override?.description ?? slot.description,
      source: parseVideoUrl(urls[i]),
    }
  })
}

/** Explanatory note for subjects with a non-standard assessment structure. */
export function getVideoNoteBySubjectName(name: string): string | undefined {
  return SUBJECT_VIDEO_NOTES[name]
}
