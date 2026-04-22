import { CSSProperties, ReactNode } from 'react';
import styles from './IconButton.module.css';

export type IconButtonSize = 'sm' | 'md' | 'lg';

export interface IconButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  size?: IconButtonSize;
  variant?: 'solid' | 'ghost';
  disabled?: boolean;
  onClick?: () => void;
  /** e.g. social / theme toggle */
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  style?: CSSProperties;
  'aria-label': string;
}

const sizeClass: Record<IconButtonSize, string> = {
  sm: styles.sizeSm,
  md: styles.sizeMd,
  lg: styles.sizeLg,
};

export default function IconButton({
  children,
  type = 'button',
  size = 'md',
  variant = 'solid',
  disabled = false,
  onClick,
  href,
  target = '_blank',
  rel = 'noopener noreferrer',
  className = '',
  style,
  'aria-label': ariaLabel,
}: IconButtonProps) {
  const cls = `${styles.root} ${sizeClass[size]} ${variant === 'ghost' ? styles.ghost : ''} ${className}`.trim();

  if (href && !disabled) {
    return (
      <a href={href} className={cls} style={style} target={target} rel={rel} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={cls} style={style} disabled={disabled} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
