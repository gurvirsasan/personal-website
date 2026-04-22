import { CSSProperties, ReactNode } from 'react';
import styles from './Section.module.css';

export interface SectionProps {
  children: ReactNode;
  id?: string;
  /** Default: comfortable vertical rhythm between major areas */
  density?: 'default' | 'compact' | 'flushY';
  className?: string;
  style?: CSSProperties;
  'aria-labelledby'?: string;
}

const densityClass = {
  default: '',
  compact: styles.compact,
  flushY: styles.flushY,
} as const;

export default function Section({
  children,
  id,
  density = 'default',
  className = '',
  style,
  'aria-labelledby': ariaLabelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${styles.root} ${densityClass[density]} ${className}`.trim()}
      style={style}
      aria-labelledby={ariaLabelledBy}
    >
      {children}
    </section>
  );
}
