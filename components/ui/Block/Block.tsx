import { CSSProperties, ReactNode } from 'react';
import styles from './Block.module.css';

export type BlockPadding = 'none' | 'sm' | 'md' | 'lg';
export type BlockTone = 'default' | 'muted' | 'glass';

export interface BlockProps {
  children: ReactNode;
  padding?: BlockPadding;
  tone?: BlockTone;
  className?: string;
  style?: CSSProperties;
  as?: 'div' | 'article' | 'aside';
}

const padClass: Record<BlockPadding, string> = {
  none: styles.paddingNone,
  sm: styles.paddingSm,
  md: styles.paddingMd,
  lg: styles.paddingLg,
};

const toneClass: Record<BlockTone, string> = {
  default: '',
  muted: styles.muted,
  glass: styles.glass,
};

export default function Block({
  children,
  padding = 'md',
  tone = 'default',
  className = '',
  style,
  as: Tag = 'div',
}: BlockProps) {
  return (
    <Tag
      className={`${styles.root} ${padClass[padding]} ${toneClass[tone]} ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  );
}
