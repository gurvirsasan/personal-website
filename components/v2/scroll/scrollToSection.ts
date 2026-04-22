/**
 * In-page section navigation for the v2 portfolio.
 * `html.v2-scroll` sets `scroll-behavior: smooth`; use `behavior: 'auto'` here so
 * programmatic navigation follows that one source of truth (avoids nested smooth).
 */
export function scrollToSectionById(id: string): void {
  if (typeof document === 'undefined') return;
  document.getElementById(id)?.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'auto' });
}
