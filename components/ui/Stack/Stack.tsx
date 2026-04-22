import { CSSProperties, ReactNode } from 'react';
import styles from './Stack.module.css';

export type UiGap = 'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface StackProps {
  children: ReactNode;
  gap?: UiGap;
  align?: 'start' | 'center' | 'stretch';
  justify?: 'start' | 'center' | 'between';
  className?: string;
  style?: CSSProperties;
  as?: 'div' | 'ul' | 'ol' | 'nav';
}

const gapClass: Record<UiGap, string> = {
  none: styles.gapNone,
  '2xs': styles.gap2xs,
  xs: styles.gapXs,
  sm: styles.gapSm,
  md: styles.gapMd,
  lg: styles.gapLg,
  xl: styles.gapXl,
  '2xl': styles.gap2xl,
};

const alignClass = {
  start: styles.alignStart,
  center: styles.alignCenter,
  stretch: styles.alignStretch,
} as const;

const justifyClass = {
  start: styles.justifyStart,
  center: styles.justifyCenter,
  between: styles.justifyBetween,
} as const;

export default function Stack({
  children,
  gap = 'md',
  align = 'stretch',
  justify = 'start',
  className = '',
  style,
  as: Tag = 'div',
}: StackProps) {
  return (
    <Tag
      className={`${styles.root} ${gapClass[gap]} ${alignClass[align]} ${justifyClass[justify]} ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  );
}
