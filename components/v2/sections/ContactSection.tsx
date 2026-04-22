import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import Section from '../Section';
import Heading from '../../ui/Heading';
import Text from '../../ui/Text';
import Button from '../../ui/Button';
import Card from '../../ui/Card';
import ResumeDownloadButton from '../ResumeDownloadButton';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  return (
    <Section id="contact">
      <div className={styles.layout}>
        <div className={styles.copy}>
          <Heading level={2} balance>
            Contact
          </Heading>
          <Text variant="muted" balance>
            If you want to talk product, infra, or a weird side project — I read every message.
          </Text>
          <span className={styles.badge}>Open to interesting work</span>
        </div>

        <div className={styles.cardWrap}>
          <div className={styles.aura} aria-hidden />
          <Card variant="elevated" padding="lg" interactive className={styles.card}>
            <p className={styles.cardLead}>Fastest paths</p>
            <div className={styles.actions}>
              <Button href="mailto:gurvirsasan1@gmail.com" variant="primary" leftSlot={<FaEnvelope aria-hidden />} className={styles.actionBtn}>
                Email
              </Button>
              <Button href="https://www.linkedin.com/in/gurvirsasan" variant="secondary" leftSlot={<FaLinkedin aria-hidden />} className={styles.actionBtn}>
                LinkedIn
              </Button>
              <Button href="https://www.github.com/gurvirsasan" variant="secondary" leftSlot={<FaGithub aria-hidden />} className={styles.actionBtn}>
                GitHub
              </Button>
              <ResumeDownloadButton className={styles.actionBtn} />
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
