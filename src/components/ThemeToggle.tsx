import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import { styles } from '../styles/styles';

export default function ThemeToggleButton() {
  const { darkTheme, toggleTheme } = useTheme();

  return (
    <button type="button" style={styles.themeToggle} onClick={toggleTheme}>
      {darkTheme ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
}