import { CSSProperties, ReactNode } from 'react';
import styles from './Badge.module.css';

export type BadgeTone = 'neutral' | 'accent' | 'success' | 'warning' | 'outline';

export interface BadgeProps {
  children: ReactNode;
  tone?: BadgeTone;
  leftSlot?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const toneClass: Record<BadgeTone, string> = {
  neutral: styles.neutral,
  accent: styles.accent,
  success: styles.success,
  warning: styles.warning,
  outline: styles.outline,
};

export default function Badge({ children, tone = 'neutral', leftSlot, className = '', style }: BadgeProps) {
  return (
    <span className={`${styles.root} ${toneClass[tone]} ${className}`.trim()} style={style}>
      {leftSlot}
      {children}
    </span>
  );
}
