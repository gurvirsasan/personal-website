import { CSSProperties, ReactNode } from 'react';
import styles from './Heading.module.css';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps {
  children: ReactNode;
  level?: HeadingLevel;
  /** Decorative gradient text */
  gradient?: boolean;
  balance?: boolean;
  id?: string;
  className?: string;
  style?: CSSProperties;
}

const levelClass: Record<HeadingLevel, string> = {
  1: styles.h1,
  2: styles.h2,
  3: styles.h3,
  4: styles.h4,
  5: styles.h5,
  6: styles.h6,
};

const headingTag = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6',
} as const;

export default function Heading({
  children,
  level = 2,
  gradient = false,
  balance = true,
  id,
  className = '',
  style,
}: HeadingProps) {
  const Tag = headingTag[level];
  return (
    <Tag
      id={id}
      className={`${styles.root} ${levelClass[level]} ${gradient ? styles.gradient : ''} ${balance ? styles.balance : ''} ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  );
}
