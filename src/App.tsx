import { BrowserRouter } from 'react-router';
import { FaMoon, FaSun } from 'react-icons/fa';
import Menu from './components/Menu';
import AppRoutes from './routes/AppRoutes';
import { styles } from './styles/styles';
import { LotteryProvider } from './contexts/LotteryContext';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { darkTheme, toggleTheme } = useTheme();

  return (
    <LotteryProvider>
      <BrowserRouter>
        <Menu />
        <div style={darkTheme ? styles.darkTheme : styles.lightTheme}>
          <button type="button" style={styles.themeToggle} onClick={toggleTheme}>
            {darkTheme ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
          <div style={styles.mainContainer}>
            <AppRoutes />
          </div>
        </div>
      </BrowserRouter>
    </LotteryProvider>
  );
}