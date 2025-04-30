import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from './contexts/theme-context.tsx';
import { GlobalStyles } from './styles/global-styles.ts';
import { ConcursoProvider } from './contexts/concurso-context.tsx';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <GlobalStyles />
    <ConcursoProvider>
      <App />
    </ConcursoProvider>
  </ThemeProvider>,
);
