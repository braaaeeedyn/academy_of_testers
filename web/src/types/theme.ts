export interface Theme {
  id: string
  name: string
  primary: string
  secondary: string
}

export const themes: Theme[] = [
  { id: 'deep-cream', name: 'Deep Cream', primary: '#02343F', secondary: '#F0EDCC' },
  { id: 'royal-coral', name: 'Royal Coral', primary: '#00539C', secondary: '#EEA47F' },
  { id: 'soft-olive', name: 'Soft Olive', primary: '#1A2417', secondary: '#ABC8A2' },
  { id: 'peach-crush', name: 'Peach Crush', primary: '#E84F5E', secondary: '#FCDFC5' },
  { id: 'dark-whisper', name: 'Dark Whisper', primary: '#4B421B', secondary: '#D7EAE2' },
  { id: 'burgundy-sand', name: 'Burgundy Sand', primary: '#5C0E14', secondary: '#F0E193' },
  { id: 'cloudy-ocean', name: 'Cloudy Ocean', primary: '#2772A0', secondary: '#CCDDEA' },
  { id: 'satin-lush', name: 'Satin Lush', primary: '#730000', secondary: '#C5A880' },
  { id: 'silver-silk', name: 'Silver Silk', primary: '#50222D', secondary: '#C4C3D0' },
  { id: 'cold-lake', name: 'Cold Lake', primary: '#1A2037', secondary: '#3A97D4' },
  { id: 'pale-bubblegum', name: 'Pale Bubblegum', primary: '#EA738D', secondary: '#C8CE91' },
  { id: 'sweet-toffee', name: 'Sweet Toffee', primary: '#755139', secondary: '#F2EDD7' },
]
