import { CSSProperties, ReactNode } from 'react';
import type { UiGap } from '../Stack';
import styles from './Inline.module.css';

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

export interface InlineProps {
  children: ReactNode;
  gap?: UiGap;
  align?: 'center' | 'start' | 'baseline';
  justify?: 'start' | 'center' | 'between' | 'end';
  wrap?: boolean;
  className?: string;
  style?: CSSProperties;
  as?: 'div' | 'span' | 'nav';
}

const alignClass = {
  center: styles.alignCenter,
  start: styles.alignStart,
  baseline: styles.alignBaseline,
} as const;

const justifyClass = {
  start: styles.justifyStart,
  center: styles.justifyCenter,
  between: styles.justifyBetween,
  end: styles.justifyEnd,
} as const;

export default function Inline({
  children,
  gap = 'sm',
  align = 'center',
  justify = 'start',
  wrap = true,
  className = '',
  style,
  as: Tag = 'div',
}: InlineProps) {
  return (
    <Tag
      className={`${styles.root} ${gapClass[gap]} ${alignClass[align]} ${justifyClass[justify]} ${
        wrap ? '' : styles.nowrap
      } ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  );
}
