import { ReactNode, useEffect, useRef, useState } from 'react';
import styles from './Section.module.css';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  /** Softer entrance when scrolled into view */
  animate?: boolean;
}

export default function Section({ id, children, className = '', animate = true }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(!animate);

  useEffect(() => {
    if (!animate) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [animate]);

  return (
    <section
      ref={ref}
      id={id}
      className={`${styles.section} ${animate && visible ? styles.visible : ''} ${!animate ? styles.visible : ''} ${className}`.trim()}
    >
      {children}
    </section>
  );
}
