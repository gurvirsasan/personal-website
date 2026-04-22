import Head from 'next/head';
import { useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { HiAcademicCap, HiBriefcase, HiCpuChip, HiEnvelope, HiHome, HiRectangleStack } from 'react-icons/hi2';
import ThemeToggle, { type ThemeChoice } from '../ThemeToggle/ThemeToggle';
import { useActiveSection } from './hooks/useActiveSection';
import SideNav, { type NavItem } from './SideNav/SideNav';
import HeroLanding from './HeroLanding';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import ContactSection from './sections/ContactSection';
import shell from './Shell.module.css';

const THEME_STORAGE_KEY = 'portfolio-theme-v2';
const NAV_COLLAPSE_KEY = 'portfolio-nav-collapsed';

const NAV_ITEMS: readonly NavItem[] = [
  { id: 'home', label: 'Home', Icon: HiHome },
  { id: 'education', label: 'Education', Icon: HiAcademicCap },
  { id: 'experience', label: 'Experience', Icon: HiBriefcase },
  { id: 'projects', label: 'Projects', Icon: HiRectangleStack },
  { id: 'skills', label: 'Skills', Icon: HiCpuChip },
  { id: 'contact', label: 'Contact', Icon: HiEnvelope },
];

function readStoredTheme(): ThemeChoice | null {
  if (typeof window === 'undefined') return null;
  const v = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (v === 'dark' || v === 'light') return v;
  return null;
}

function systemTheme(): ThemeChoice {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function readNavCollapsed(): boolean {
  if (typeof window === 'undefined') return false;
  return window.localStorage.getItem(NAV_COLLAPSE_KEY) === '1';
}

export default function Portfolio() {
  const [theme, setTheme] = useState<ThemeChoice>('light');
  const [pastHero, setPastHero] = useState(false);
  const [navCollapsed, setNavCollapsed] = useState(false);

  const sectionIds = useMemo(() => NAV_ITEMS.map((i) => i.id), []);
  const activeId = useActiveSection(sectionIds);

  useLayoutEffect(() => {
    setTheme(readStoredTheme() ?? systemTheme());
    setNavCollapsed(readNavCollapsed());
  }, []);

  useEffect(() => {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    window.localStorage.setItem(NAV_COLLAPSE_KEY, navCollapsed ? '1' : '0');
  }, [navCollapsed]);

  useEffect(() => {
    document.documentElement.classList.add('v2-scroll');
    return () => document.documentElement.classList.remove('v2-scroll');
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * 0.22;
      setPastHero(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onThemeChange = useCallback((next: ThemeChoice) => {
    setTheme(next);
  }, []);

  const onToggleCollapse = useCallback(() => {
    setNavCollapsed((c) => !c);
  }, []);

  return (
    <div
      className={`${shell.root} theme-scope`}
      data-theme={theme}
      data-past-hero={pastHero ? 'true' : 'false'}
      data-nav-collapsed={navCollapsed ? 'true' : 'false'}
    >
      <Head>
        <title>Gurvir Sasan — Portfolio</title>
        <meta name="description" content="Software engineer portfolio." />
        <meta name="color-scheme" content="light dark" />
      </Head>
      <ThemeToggle theme={theme} onThemeChange={onThemeChange} />
      <div className={shell.bg} aria-hidden />
      <div className={shell.blobs} aria-hidden>
        <div className={`${shell.blob} ${shell.blobA}`} />
        <div className={`${shell.blob} ${shell.blobB}`} />
        <div className={`${shell.blob} ${shell.blobC}`} />
      </div>

      <HeroLanding />

      <SideNav
        items={NAV_ITEMS}
        activeId={activeId}
        pastHero={pastHero}
        collapsed={navCollapsed}
        onToggleCollapse={onToggleCollapse}
      />

      <main className={shell.main}>
        <div className={shell.mainInner}>
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </div>
      </main>
    </div>
  );
}
