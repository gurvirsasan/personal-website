import Head from 'next/head';
import { useEffect, useLayoutEffect, useState, useCallback } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Section from '../ui/Section';
import Stack from '../ui/Stack';
import Card from '../ui/Card';
import Heading from '../ui/Heading';
import Text from '../ui/Text';
import Button from '../ui/Button';
import Inline from '../ui/Inline';
import Badge from '../ui/Badge';
import ThemeToggle, { type ThemeChoice } from '../ThemeToggle/ThemeToggle';
import styles from './LandingPage.module.css';

const THEME_STORAGE_KEY = 'portfolio-theme-v2';

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

const STACK_BADGES = ['TypeScript', 'React', 'Next.js', 'Node'] as const;

/**
 * TODO(v2): Sticky nav + scroll-spy (mirror old Header for #education, #experience, #projects, #skills, #contact).
 * TODO(v2): Port AboutSection → scroll section id="education".
 * TODO(v2): Port ExperienceSection → #experience; ProjectsSection → #projects; SkillsSection → #skills; ContactSection → #contact.
 * TODO(v2): Resume download CTA (parity with old DownloadButton) + optional hero photo (face-pic.jpg).
 * TODO(v2): Analytics / events if you wire v2 API routes the same way as v1.
 */
export default function LandingPage() {
  const [theme, setTheme] = useState<ThemeChoice>('light');

  useLayoutEffect(() => {
    setTheme(readStoredTheme() ?? systemTheme());
  }, []);

  useEffect(() => {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const onThemeChange = useCallback((next: ThemeChoice) => {
    setTheme(next);
  }, []);

  return (
    <div className={`${styles.page} theme-scope`} data-theme={theme}>
      <Head>
        <title>Gurvir Sasan — Portfolio</title>
        <meta name="description" content="Software engineer portfolio (v2 in progress)." />
        <meta name="color-scheme" content="light dark" />
      </Head>
      <ThemeToggle theme={theme} onThemeChange={onThemeChange} />
      <div className={styles.bg} aria-hidden />
      <div className={styles.blobs} aria-hidden>
        <div className={`${styles.blob} ${styles.blobA}`} />
        <div className={`${styles.blob} ${styles.blobB}`} />
        <div className={`${styles.blob} ${styles.blobC}`} />
      </div>

      <main className={styles.main}>
        <Section id="home" density="default">
          <div className={styles.shell}>
            <div className={styles.heroRow}>
              <div className={styles.heroInner}>
                <Card variant="gradientBorder" padding="lg" interactive className={styles.heroCard}>
                  <Stack gap="md" align="center">
                    <div className={styles.accentLine} aria-hidden />
                    <Heading level={1} gradient balance>
                      Gurvir Sasan
                    </Heading>
                    <Text variant="lead" balance>
                      Software engineer — building clear, reliable interfaces and systems.
                    </Text>
                    <Inline gap="md" justify="center" wrap>
                      <Button
                        href="https://www.linkedin.com/in/gurvirsasan"
                        variant="secondary"
                        leftSlot={<FaLinkedin aria-hidden />}
                      >
                        LinkedIn
                      </Button>
                      <Button
                        href="https://www.github.com/gurvirsasan"
                        variant="secondary"
                        leftSlot={<FaGithub aria-hidden />}
                      >
                        GitHub
                      </Button>
                    </Inline>
                  </Stack>
                </Card>
              </div>
            </div>
          </div>
        </Section>

        <Section id="roadmap" density="compact">
          <div className={styles.shell}>
            <div className={styles.lower}>
              <div className={styles.deck}>
                <div className={styles.deckGrid}>
                  <div>
                    <Stack gap="md">
                      <Text variant="label">Single-page site — next up</Text>
                      <Text variant="muted" balance>
                        Same scrollable story as v1: hero first, then education, experience, projects, skills, and
                        contact. This panel tracks what ships next.
                      </Text>
                      <ul className={styles.roadmapList}>
                        <li>Education / about — port copy from the About section.</li>
                        <li>Experience — timeline with refreshed layout.</li>
                        <li>Projects — cards, links, and tech tags.</li>
                        <li>Skills and tools — dense but scannable.</li>
                        <li>Contact — form or mailto, plus socials.</li>
                      </ul>
                    </Stack>
                  </div>

                  <aside className={styles.deckAside} aria-label="Stack and focus">
                    <Text variant="label">Stack I reach for</Text>
                    <div className={styles.chips}>
                      {STACK_BADGES.map((label) => (
                        <Badge key={label} tone="outline">
                          {label}
                        </Badge>
                      ))}
                    </div>
                    <Text variant="small" balance>
                      This site is Next.js + TypeScript — shipping the new shell first, then layering your portfolio
                      sections back in.
                    </Text>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}
