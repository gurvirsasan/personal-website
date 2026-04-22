import type { IconType } from 'react-icons';
import { HiBars3 } from 'react-icons/hi2';
import { scrollToSectionById } from '../scroll/scrollToSection';
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
  return (
    <>
      {/* Mobile: glass dock after first scroll */}
      <nav className={`${styles.mobileDock} ${pastHero ? styles.mobileDockVisible : ''}`.trim()} aria-label="Sections">
        <ul className={styles.mobileDockList}>
          {items.map((item) => {
            const Icon = item.Icon;
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  className={`${styles.dockBtn} ${isActive ? styles.dockBtnActive : ''}`.trim()}
                  onClick={() => scrollToSectionById(item.id)}
                  aria-label={item.label}
                  title={item.label}
                  aria-current={isActive ? 'true' : undefined}
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
          <div className={styles.railHeader}>
            <button
              type="button"
              className={styles.collapseToggle}
              onClick={onToggleCollapse}
              aria-label={collapsed ? 'Expand navigation' : 'Collapse navigation'}
              title={collapsed ? 'Expand labels' : 'Hide labels'}
            >
              <HiBars3 aria-hidden />
            </button>
          </div>

          <ul className={styles.railList}>
            {items.map((item) => {
              const Icon = item.Icon;
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    className={`${styles.railLink} ${isActive ? styles.railLinkActive : ''}`.trim()}
                    onClick={() => scrollToSectionById(item.id)}
                    title={item.label}
                    aria-label={item.label}
                    aria-current={isActive ? 'true' : undefined}
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
