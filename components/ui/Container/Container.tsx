import { CSSProperties, ReactNode } from 'react';
import styles from './Container.module.css';

export type ContainerMaxWidth = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface ContainerProps {
  children: ReactNode;
  /** Reading column → full-bleed layout */
  maxWidth?: ContainerMaxWidth;
  className?: string;
  style?: CSSProperties;
  as?: 'div' | 'main' | 'article' | 'section';
}

const maxClass: Record<ContainerMaxWidth, string> = {
  sm: styles.maxSm,
  md: styles.maxMd,
  lg: styles.maxLg,
  xl: styles.maxXl,
  full: styles.maxFull,
};

export default function Container({
  children,
  maxWidth = 'lg',
  className = '',
  style,
  as: Tag = 'div',
}: ContainerProps) {
  return (
    <Tag className={`${styles.root} ${maxClass[maxWidth]} ${className}`.trim()} style={style}>
      {children}
    </Tag>
  );
}
