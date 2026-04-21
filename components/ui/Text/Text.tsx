import { CSSProperties, ReactNode } from 'react';
import styles from './Text.module.css';

export type TextVariant = 'body' | 'lead' | 'muted' | 'small' | 'label' | 'mono';

export interface TextProps {
  children: ReactNode;
  variant?: TextVariant;
  /** Nicer line breaks for headings + short blurbs */
  balance?: boolean;
  className?: string;
  style?: CSSProperties;
  as?: 'p' | 'span' | 'div' | 'label';
}

const variantClass: Record<TextVariant, string> = {
  body: styles.body,
  lead: styles.lead,
  muted: `${styles.body} ${styles.muted}`,
  small: `${styles.small} ${styles.muted}`,
  label: styles.label,
  mono: `${styles.mono} ${styles.body}`,
};

export default function Text({
  children,
  variant = 'body',
  balance = false,
  className = '',
  style,
  as: Tag = 'p',
}: TextProps) {
  return (
    <Tag className={`${styles.root} ${variantClass[variant]} ${balance ? styles.balance : ''} ${className}`.trim()} style={style}>
      {children}
    </Tag>
  );
}
