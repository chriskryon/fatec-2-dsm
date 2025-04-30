import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'SF Pro Display';
    src: url('/fonts/SF-Pro-Display-Regular.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'SF Pro Display';
    src: url('/fonts/SF-Pro-Display-Bold.otf') format('opentype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'SF Pro Text';
    src: url('/fonts/SF-Pro-Text-Regular.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'SF Pro Text';
    src: url('/fonts/SF-Pro-Text-Medium.otf') format('opentype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

body {
  font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textPrimary};
  transition: background-color 0.5s ease-in-out, color 0.3s ease-in-out, opacity 0.4s ease-in-out;
  background-image: linear-gradient(${({ theme }) => theme.lineBg} 1px, transparent 1px),
    linear-gradient(90deg, ${({ theme }) => theme.lineBg} 1px, transparent 1px);
  background-size: 10px 10px;
  opacity: 1;
}

/* Opcional: Adicionar um wrapper para o conteúdo */
body > * {
  transition: opacity 0.4s ease-in-out;
}

  h1, h2, h3, h4, h5, h6 {
    font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
  }

  button {
    cursor: pointer;
    font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  /* Acessibilidade - foco visível */
  :focus {
    outline: 2px solid ${({ theme }) => theme.accent};
    outline-offset: 2px;
  }
`;
