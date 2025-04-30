import { createContext, useState, useContext, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, type ThemeType } from '../styles/theme';

type ThemeMode = 'dark' | 'light';

interface ThemeContextType {
  themeMode: ThemeMode;
  toggleTheme: () => void;
  theme: ThemeType;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark');

  const theme = themeMode === 'dark' ? darkTheme : lightTheme;

  // Adicionar o themeMode ao objeto theme para facilitar o acesso nos componentes estilizados
  const themeWithMode = {
    ...theme,
    themeMode,
  };

  const toggleTheme = () => {
    setThemeMode((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  // Persistir tema no localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeMode | null;
    if (savedTheme) {
      setThemeMode(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', themeMode);
  }, [themeMode]);

  return (
    <ThemeContext.Provider
      value={{ themeMode, toggleTheme, theme: themeWithMode }}
    >
      <StyledThemeProvider theme={themeWithMode}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
