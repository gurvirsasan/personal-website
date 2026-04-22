import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiChevronDown } from 'react-icons/hi2';
import Card from '../ui/Card';
import Stack from '../ui/Stack';
import Heading from '../ui/Heading';
import Text from '../ui/Text';
import Button from '../ui/Button';
import Inline from '../ui/Inline';
import styles from './HeroLanding.module.css';

export default function HeroLanding() {
  return (
    <section id="home" className={styles.hero} aria-label="Introduction">
      <div className={styles.inner}>
        <Card variant="gradientBorder" padding="lg" interactive className={styles.card}>
          <Stack gap="md" align="center">
            <div className={styles.accentLine} aria-hidden />
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

        <div className={styles.scrollCue}>
          <span className={styles.scrollLabel}>Scroll to explore</span>
          <span className={styles.chevronWrap} aria-hidden>
            <HiChevronDown className={styles.chevron} />
          </span>
        </div>
      </div>
    </section>
  );
}
