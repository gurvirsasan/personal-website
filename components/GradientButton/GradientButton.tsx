import { ReactNode, CSSProperties } from 'react';
import styles from './GradientButton.module.css';

interface GradientButtonProps {
  onClick?: () => void;
  href?: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function GradientButton({ onClick, href, children, icon, className = '', style }: GradientButtonProps) {
  const buttonContent = (
    <>
      {icon && icon}
      {children}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.gradientButton} ${className}`}
        style={style}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${styles.gradientButton} ${className}`}
      style={style}
    >
      {buttonContent}
    </button>
  );
} 