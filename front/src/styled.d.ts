import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    glassBg: string;
    glassBgDarker?: string;
    glassBgLighter?: string;
    ballBg: string;
    ballBorder: string;
    textPrimary: string;
    textSecondary: string;
    accent: string;
    primary: string;
    error: string;
    lineBg: string;
    borderLight?: string;
    borderMedium?: string;
    shadow?: string;
    themeMode?: 'dark' | 'light';
  }
}
