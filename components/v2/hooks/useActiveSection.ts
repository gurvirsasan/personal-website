import { useEffect, useState } from 'react';

/** Same midpoint rule as the legacy Header scroll-spy. */
export function useActiveSection(sectionIds: readonly string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    const handleScroll = () => {
      const mid = window.innerHeight * 0.42;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const { top, bottom } = el.getBoundingClientRect();
        if (top <= mid && bottom >= mid) {
          setActiveId(id);
          return;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [sectionIds]);

  return activeId;
}
