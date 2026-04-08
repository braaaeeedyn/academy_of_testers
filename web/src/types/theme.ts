export interface Theme {
  id: string
  name: string
  primary: string
  secondary: string
}

export const lightThemes: Theme[] = [
  { id: 'deep-cream', name: 'Deep Cream', primary: '#02343F', secondary: '#F0EDCC' },
  { id: 'royal-coral', name: 'Royal Coral', primary: '#00539C', secondary: '#EEA47F' },
  { id: 'peach-crush', name: 'Peach Crush', primary: '#E84F5E', secondary: '#FCDFC5' },
  { id: 'dark-whisper', name: 'Dark Whisper', primary: '#4B421B', secondary: '#D7EAE2' },
  { id: 'burgundy-sand', name: 'Burgundy Sand', primary: '#5C0E14', secondary: '#F0E193' },
  { id: 'cloudy-ocean', name: 'Cloudy Ocean', primary: '#2772A0', secondary: '#CCDDEA' },
  { id: 'satin-lush', name: 'Satin Lush', primary: '#730000', secondary: '#C5A880' },
  { id: 'sweet-toffee', name: 'Sweet Toffee', primary: '#755139', secondary: '#F2EDD7' },
  { id: 'pale-bubblegum', name: 'Pale Bubblegum', primary: '#EA738D', secondary: '#C8CE91' },
]

export const darkThemes: Theme[] = [
  { id: 'cold-lake', name: 'Cold Lake', primary: '#7FA8C9', secondary: '#1A2037' },
  { id: 'soft-olive', name: 'Soft Olive', primary: '#8FA888', secondary: '#1E2A1C' },
  { id: 'slate-dusk', name: 'Slate Dusk', primary: '#A0A4B0', secondary: '#2A2D35' },
  { id: 'navy-ash', name: 'Navy Ash', primary: '#8E9AAF', secondary: '#1B2332' },
  { id: 'deep-sapphire', name: 'Deep Sapphire', primary: '#7CA1C0', secondary: '#141E2E' },
  { id: 'shadow-mint', name: 'Shadow Mint', primary: '#7EB0AA', secondary: '#1C2828' },
  { id: 'charcoal-sand', name: 'Charcoal Sand', primary: '#B5A992', secondary: '#252320' },
  { id: 'iron-walnut', name: 'Iron Walnut', primary: '#9C8B7A', secondary: '#1F1B18' },
  { id: 'midnight-steel', name: 'Midnight Steel', primary: '#8A9BAE', secondary: '#171B22' },
]

export const themes: Theme[] = [...lightThemes, ...darkThemes]
