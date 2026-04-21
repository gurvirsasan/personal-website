import { CSSProperties } from 'react';
import styles from './Divider.module.css';

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  /** Lighter line for subtle separation */
  tone?: 'default' | 'soft';
  className?: string;
  style?: CSSProperties;
  'aria-hidden'?: boolean;
}

export default function Divider({
  orientation = 'horizontal',
  tone = 'default',
  className = '',
  style,
  'aria-hidden': ariaHidden = true,
}: DividerProps) {
  return (
    <hr
      className={`${styles.root} ${orientation === 'vertical' ? styles.vertical : styles.horizontal} ${
        tone === 'soft' ? styles.soft : ''
      } ${className}`.trim()}
      style={style}
      aria-hidden={ariaHidden}
    />
  );
}
