export const darkTheme = {
  background: '#1A1A1A',
  glassBg: 'rgba(42, 42, 42, 0.7)',
  ballBg: 'rgba(0, 100, 0, 0.7)',
  ballBorder: '#90EE90',
  textPrimary: '#FFFFFF',
  textSecondary: '#D3D3D3',
  accent: '#90EE90',
  primary: '#006400',
  error: 'rgba(75, 0, 0, 0.7)',
  lineBg: 'rgba(42, 42, 42, 0.5)',
};

export const lightTheme = {
  background: '#F5F5F7',
  glassBg: 'rgba(255, 255, 255, 0.65)',
  glassBgDarker: 'rgba(255, 255, 255, 0.8)',
  glassBgLighter: 'rgba(255, 255, 255, 0.5)',
  ballBg: 'rgba(0, 100, 0, 0.8)',
  ballBorder: '#90EE90',
  textPrimary: '#1D1D1F',
  textSecondary: '#6E6E73',
  accent: '#34C759', // Verde Apple
  primary: '#006400',
  error: 'rgba(255, 59, 48, 0.7)', // Vermelho Apple
  lineBg: 'rgba(0, 0, 0, 0.05)',
  borderLight: 'rgba(0, 0, 0, 0.1)',
  borderMedium: 'rgba(0, 0, 0, 0.15)',
  shadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
};

export type ThemeType = typeof darkTheme | typeof lightTheme;
