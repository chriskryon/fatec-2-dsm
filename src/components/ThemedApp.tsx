import { useTheme } from '../contexts/ThemeContext';
import AppRoutes from '../routes/AppRoutes';
import { styles } from '../styles/styles';
import ThemeToggleButton from './ThemeToggle';

export function ThemedApp() {
  const { darkTheme } = useTheme();

  return (
    <div style={darkTheme ? styles.darkTheme : styles.lightTheme}>
      <ThemeToggleButton />
      <div style={styles.mainContainer}>
        <AppRoutes />
      </div>
    </div>
  );
}
