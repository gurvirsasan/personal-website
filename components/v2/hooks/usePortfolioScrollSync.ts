import { useEffect, useRef, useState } from 'react';

/**
 * Document Y of the element’s top edge (stable for scroll-spy vs offsetParent quirks).
 */
function sectionTopY(el: HTMLElement): number {
  return el.getBoundingClientRect().top + window.scrollY;
}

/**
 * Last section whose top is at or above an “anchor line” below the viewport top.
 * Stable when scrolling gaps between sections (unlike midpoint-in-rect tests).
 */
function pickActiveSectionId(sectionIds: readonly string[], scrollY: number, viewportHeight: number): string {
  const docHeight = document.documentElement.scrollHeight;
  const distanceToBottom = docHeight - (scrollY + viewportHeight);

  // Near page bottom, scroll-to-start for the final section may be clamped.
  // Ensure the last section can still become active (e.g., Contact).
  if (distanceToBottom <= 24) {
    for (let i = sectionIds.length - 1; i >= 0; i -= 1) {
      const id = sectionIds[i];
      if (id && document.getElementById(id)) return id;
    }
  }

  const anchorLine = scrollY + Math.min(200, viewportHeight * 0.22);
  let chosen = sectionIds[0] ?? '';
  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (sectionTopY(el) <= anchorLine) chosen = id;
  }
  return chosen;
}

export function usePortfolioScrollSync(
  sectionIds: readonly string[],
  /** When scrollY exceeds this fraction of viewport height, secondary nav chrome is shown. */
  pastHeroThresholdRatio = 0.22,
) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '');
  const [pastHero, setPastHero] = useState(false);
  const sectionIdsRef = useRef(sectionIds);
  sectionIdsRef.current = sectionIds;

  const rafRef = useRef(0);

  useEffect(() => {
    const run = () => {
      const ids = sectionIdsRef.current;
      const y = window.scrollY;
      const vh = window.innerHeight;

      setPastHero(y > vh * pastHeroThresholdRatio);
      setActiveId(pickActiveSectionId(ids, y, vh));
    };

    const onScrollOrResize = () => {
      if (rafRef.current) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = 0;
        run();
      });
    };

    run();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, [pastHeroThresholdRatio]);

  return { activeId, pastHero };
}
