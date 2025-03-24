import Image from 'next/image';
import styles from './HomeSection.module.css';
import SectionCard from '../../SectionCard/SectionCard';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function HomeSection() {
  return (
    <SectionCard id="home" isFirstSection={true} hasGradient={true} noBackground={true}>
      <div className={styles.homeContent}>
        <div className={styles.profileContainer}>
          <div className={styles.thoughtBubble}>
            <p>Hello 👋, I&apos;m Gurvir!</p>
          </div>
          <div className={styles.secondBubble}>
            Software Engineer
          </div>
          <Image
            src="/face-pic.jpg"
            alt="Profile Picture"
            width={600}
            height={600}
            className={styles.profileImage}
            priority
          />
        </div>
        <div className={styles.socialLinks}>
          <a
            href="https://www.linkedin.com/in/gurvirsasan"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialButton}
          >
            <FaLinkedin className={styles.socialIcon} />
            LinkedIn
          </a>
          <a
            href="https://www.github.com/gurvirsasan"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialButton}
          >
            <FaGithub className={styles.socialIcon} />
            GitHub
          </a>
        </div>
      </div>
    </SectionCard>
  );
}
