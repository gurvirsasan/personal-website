import { CSSProperties, ReactNode } from 'react';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
  /** Renders as anchor for external links */
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
  className?: string;
  style?: CSSProperties;
  'aria-label'?: string;
}

const variantClass: Record<ButtonVariant, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
  ghost: styles.ghost,
  danger: styles.danger,
};

const sizeClass: Record<ButtonSize, string> = {
  sm: styles.sizeSm,
  md: styles.sizeMd,
  lg: styles.sizeLg,
};

export default function Button({
  children,
  type = 'button',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  href,
  target = '_blank',
  rel = 'noopener noreferrer',
  onClick,
  leftSlot,
  rightSlot,
  className = '',
  style,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const cls = `${styles.root} ${variantClass[variant]} ${sizeClass[size]} ${fullWidth ? styles.fullWidth : ''} ${className}`.trim();

  const inner = (
    <>
      {leftSlot}
      {children}
      {rightSlot}
    </>
  );

  if (href && !disabled) {
    return (
      <a href={href} className={cls} style={style} target={target} rel={rel} aria-label={ariaLabel}>
        {inner}
      </a>
    );
  }

  return (
    <button type={type} className={cls} style={style} disabled={disabled} onClick={onClick} aria-label={ariaLabel}>
      {inner}
    </button>
  );
}
