import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import styles from './SurfaceLift.module.css';

export type SurfaceLiftVariant = 'default' | 'compact';

type OwnProps = {
  variant?: SurfaceLiftVariant;
  className?: string;
  children: ReactNode;
};

export type SurfaceLiftProps<T extends ElementType = 'div'> = OwnProps & {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | keyof OwnProps>;

export default function SurfaceLift<T extends ElementType = 'div'>({
  as,
  variant = 'default',
  className = '',
  children,
  ...rest
}: SurfaceLiftProps<T>) {
  const Tag = (as ?? 'div') as ElementType;
  const variantClass = variant === 'compact' ? styles.compact : '';

  return (
    <Tag className={`${styles.root} ${variantClass} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
