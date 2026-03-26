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
  { id: 'cold-lake', name: 'Cold Lake', primary: '#3A97D4', secondary: '#1A2037' },
  { id: 'soft-olive', name: 'Soft Olive', primary: '#ABC8A2', secondary: '#1A2417' },
  { id: 'silver-silk', name: 'Silver Silk', primary: '#C4C3D0', secondary: '#50222D' },
  { id: 'sleek-noir', name: 'Sleek Noir', primary: '#B388FF', secondary: '#0D0D0D' },
  { id: 'midnight-ember', name: 'Midnight Ember', primary: '#FF6B35', secondary: '#1C1C1E' },
  { id: 'deep-sapphire', name: 'Deep Sapphire', primary: '#64B5F6', secondary: '#0A1929' },
  { id: 'shadow-mint', name: 'Shadow Mint', primary: '#80CBC4', secondary: '#1B2A2A' },
  { id: 'obsidian-gold', name: 'Obsidian Gold', primary: '#FFD54F', secondary: '#1A1A2E' },
  { id: 'carbon-rose', name: 'Carbon Rose', primary: '#F48FB1', secondary: '#1E1E1E' },
]

export const themes: Theme[] = [...lightThemes, ...darkThemes]
