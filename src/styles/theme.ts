import type { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      card: {
        background: string;
        text: string;
        border: string;
      };
      ball: {
        background: string;
        text: string;
      };
      button: {
        background: string;
        text: string;
        hover: string;
      };
    };
  }
}

export const lightTheme: DefaultTheme = {
  title: 'light',
  colors: {
    primary: '#4CAF50',
    secondary: '#209869',
    background: '#f9f9f9',
    text: '#000',
    card: {
      background: 'rgba(85, 85, 85, 0.8)',
      text: '#ffffff',
      border: 'rgba(255, 255, 255, 0.2)',
    },
    ball: {
      background: '#209869',
      text: '#ffffff',
    },
    button: {
      background: '#4CAF50',
      text: '#ffffff',
      hover: '#45a049',
    },
  },
};

export const darkTheme: DefaultTheme = {
  title: 'dark',
  colors: {
    primary: '#4CAF50',
    secondary: '#209869',
    background: '#1e1e2f',
    text: '#fff',
    card: {
      background: 'rgba(36, 36, 36, 0.9)',
      text: '#f5f5f5',
      border: 'rgba(255, 255, 255, 0.2)',
    },
    ball: {
      background: '#209869',
      text: '#ffffff',
    },
    button: {
      background: '#4CAF50',
      text: '#ffffff',
      hover: '#45a049',
    },
  },
};
