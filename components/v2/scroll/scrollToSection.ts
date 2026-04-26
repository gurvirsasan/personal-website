/**
 * In-page section navigation for the v2 portfolio.
 * `html.v2-scroll` sets `scroll-behavior: smooth`; use `behavior: 'auto'` here so
 * programmatic navigation follows that one source of truth (avoids nested smooth).
 */
export function scrollToSectionById(id: string): void {
  if (typeof document === 'undefined' || typeof window === 'undefined') return;
  const el = document.getElementById(id);
  if (!el) return;

  const y = el.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top: y, left: 0, behavior: 'auto' });
}
