import { BrowserRouter } from 'react-router';
import Menu from './components/Menu';
import { LotteryProvider } from './contexts/LotteryContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemedApp } from './components/ThemedApp';

export default function App() {
  return (
    <LotteryProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Menu />
          <ThemedApp />
        </BrowserRouter>
      </ThemeProvider>
    </LotteryProvider>
  );
}