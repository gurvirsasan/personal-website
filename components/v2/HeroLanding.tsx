import { useCallback } from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiChevronDown } from 'react-icons/hi2';
import Card from '../ui/Card';
import Stack from '../ui/Stack';
import Heading from '../ui/Heading';
import Text from '../ui/Text';
import Button from '../ui/Button';
import Inline from '../ui/Inline';
import { scrollToSectionById } from './scroll/scrollToSection';
import styles from './HeroLanding.module.css';

export default function HeroLanding() {
  const scrollToEducation = useCallback(() => {
    scrollToSectionById('education');
  }, []);

  return (
    <section id="home" className={styles.hero} aria-label="Introduction">
      <div className={styles.inner}>
        <Card variant="gradientBorder" padding="lg" interactive className={styles.card}>
          <Stack gap="md" align="center">
            <div className={styles.portraitRing}>
              <Image
                src="/headshot.png"
                alt="Portrait of Gurvir Sasan"
                width={320}
                height={320}
                className={styles.portrait}
                priority
                sizes="(max-width: 480px) 96px, 128px"
              />
            </div>
            <Heading level={1} gradient balance>
              Gurvir Sasan
            </Heading>
            <Text variant="lead" balance>
              Software engineer — building clear, reliable interfaces and systems.
            </Text>

            <Inline gap="md" justify="center" wrap>
              <Button href="https://www.linkedin.com/in/gurvirsasan" variant="secondary" leftSlot={<FaLinkedin aria-hidden />}>
                LinkedIn
              </Button>
              <Button href="https://www.github.com/gurvirsasan" variant="secondary" leftSlot={<FaGithub aria-hidden />}>
                GitHub
              </Button>
            </Inline>
          </Stack>
        </Card>

        <button
          type="button"
          className={styles.scrollCue}
          onClick={scrollToEducation}
          aria-label="Go to Education section"
        >
          <span className={styles.scrollLabel}>Scroll to explore</span>
          <span className={styles.chevronWrap} aria-hidden>
            <HiChevronDown className={styles.chevron} />
          </span>
        </button>
      </div>
    </section>
  );
}
