import type { IconType } from 'react-icons';
import { HiChevronDoubleLeft, HiChevronDoubleRight, HiSparkles } from 'react-icons/hi2';
import styles from './SideNav.module.css';

export interface NavItem {
  id: string;
  label: string;
  Icon: IconType;
}

interface SideNavProps {
  items: readonly NavItem[];
  activeId: string;
  pastHero: boolean;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export default function SideNav({ items, activeId, pastHero, collapsed, onToggleCollapse }: SideNavProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {/* Mobile: glass dock after first scroll */}
      <nav className={`${styles.mobileDock} ${pastHero ? styles.mobileDockVisible : ''}`.trim()} aria-label="Sections">
        <ul className={styles.mobileDockList}>
          {items.map((item) => {
            const Icon = item.Icon;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  className={`${styles.dockBtn} ${activeId === item.id ? styles.dockBtnActive : ''}`.trim()}
                  onClick={() => scrollTo(item.id)}
                  aria-label={item.label}
                  title={item.label}
                >
                  <Icon className={styles.dockIcon} aria-hidden />
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Desktop: floating rail */}
      <aside
        className={`${styles.rail} ${pastHero ? styles.railVisible : ''} ${collapsed ? styles.railCollapsed : ''}`.trim()}
        aria-hidden={!pastHero}
      >
        <div className={styles.railInner}>
          <button
            type="button"
            className={styles.collapseToggle}
            onClick={onToggleCollapse}
            aria-label={collapsed ? 'Expand navigation' : 'Collapse navigation'}
            title={collapsed ? 'Expand' : 'Tuck away'}
          >
            {collapsed ? <HiChevronDoubleRight aria-hidden /> : <HiChevronDoubleLeft aria-hidden />}
          </button>

          <button type="button" className={styles.railBrand} onClick={() => scrollTo('home')} aria-label="Home">
            <HiSparkles className={styles.brandIcon} aria-hidden />
            {!collapsed && <span>Gurvir</span>}
          </button>

          <ul className={styles.railList}>
            {items.map((item) => {
              const Icon = item.Icon;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    className={`${styles.railLink} ${activeId === item.id ? styles.railLinkActive : ''}`.trim()}
                    onClick={() => scrollTo(item.id)}
                    title={item.label}
                  >
                    <Icon className={styles.railIcon} aria-hidden />
                    {!collapsed && <span className={styles.railLabel}>{item.label}</span>}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
}
