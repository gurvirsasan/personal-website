import { useTheme } from '../context/ThemeContext';
import styles from '../styles/ThemeToggle.module.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={styles.themeToggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
} 