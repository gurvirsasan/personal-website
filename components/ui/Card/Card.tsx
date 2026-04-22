import { CSSProperties, ReactNode } from 'react';
import styles from './Card.module.css';

export type CardPadding = 'none' | 'sm' | 'md' | 'lg';
export type CardVariant = 'elevated' | 'outline' | 'ghost' | 'gradientBorder';

export interface CardProps {
  children: ReactNode;
  variant?: CardVariant;
  padding?: CardPadding;
  /** Subtle lift on hover (elevated / gradient border) */
  interactive?: boolean;
  className?: string;
  style?: CSSProperties;
  as?: 'div' | 'article' | 'section';
}

const padClass: Record<CardPadding, string> = {
  none: styles.paddingNone,
  sm: styles.paddingSm,
  md: styles.paddingMd,
  lg: styles.paddingLg,
};

const variantClass: Record<CardVariant, string> = {
  elevated: styles.elevated,
  outline: styles.outline,
  ghost: styles.ghost,
  gradientBorder: styles.gradientBorder,
};

export default function Card({
  children,
  variant = 'elevated',
  padding = 'md',
  interactive = false,
  className = '',
  style,
  as: Tag = 'div',
}: CardProps) {
  const interactiveClass =
    interactive && (variant === 'elevated' || variant === 'gradientBorder') ? styles.interactive : '';

  if (variant === 'gradientBorder') {
    return (
      <Tag
        className={`${styles.root} ${styles.gradientBorder} ${interactiveClass} ${className}`.trim()}
        style={style}
      >
        <div className={`${styles.gradientInner} ${padClass[padding]}`}>{children}</div>
      </Tag>
    );
  }

  return (
    <Tag
      className={`${styles.root} ${padClass[padding]} ${variantClass[variant]} ${interactiveClass} ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  );
}
