import { useCallback } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi2';
import styles from './ThemeToggle.module.css';

export type ThemeChoice = 'light' | 'dark';

interface ThemeToggleProps {
  theme: ThemeChoice;
  onThemeChange: (next: ThemeChoice) => void;
}

export default function ThemeToggle({ theme, onThemeChange }: ThemeToggleProps) {
  const toggle = useCallback(() => {
    onThemeChange(theme === 'dark' ? 'light' : 'dark');
  }, [theme, onThemeChange]);

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className={styles.themeToggle}
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      {isDark ? <HiSun className={styles.icon} aria-hidden /> : <HiMoon className={styles.icon} aria-hidden />}
    </button>
  );
}
