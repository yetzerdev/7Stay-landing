// EVA Icons - icon library for React components
export const evaIcons: Record<string, string> = {
  'activity': '<g><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-12v12m0 0l4-4m-4 4l-4-4"/></g>',
  'arrow-back': '<g><polyline points="24 12 4 12"/><polyline points="10 18 4 12 10 6"/></g>',
  'arrow-down': '<g><polyline points="24 6 12 18 0 6"/></g>',
  'arrow-forward': '<g><polyline points="4 12 24 12"/><polyline points="14 18 20 12 14 6"/></g>',
  'arrow-up': '<g><polyline points="12 3 12 21"/><polyline points="6 15 12 9 18 15"/></g>',
  'checkmark': '<g><polyline points="20 6 9 17 4 12"/></g>',
  'close': '<g><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></g>',
  'home': '<g><polyline points="2 12 12 2 22 12"/><path d="M5 10v10h14V10z"/></g>',
  'menu': '<g><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></g>',
  'search': '<g><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="15.5" y2="15.5"/></g>',
  'settings': '<g><line x1="12" y1="3" x2="12" y2="21"/><circle cx="12" cy="12" r="7"/></g>',
  'user': '<g><path d="M12 12a4 4 0 1 0 4-4 4 4 0 0 0-4 4zm0-6a2 2 0 1 0-2 2 2 2 0 0 1 2-2z"/><path d="M12 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z"/></g>',
};

export type EvaIconName = keyof typeof evaIcons;

// Helper function to render EVA icon
export const renderEvaIcon = (iconName: string, size: number = 24, color: string = 'currentColor'): string => {
  const icon = evaIcons[iconName];
  if (!icon) {
    console.warn(`Icon '${iconName}' not found`);
    return '';
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    ${icon}
  </svg>`;
};
