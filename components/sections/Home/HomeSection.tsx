import Image from 'next/image';
import styles from './HomeSection.module.css';
import SectionCard from '../../SectionCard/SectionCard';

export default function HomeSection() {
  return (
    <SectionCard id="home" isFirstSection={true}>
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
          <Image
            src="/apple.png"
            alt="Apple Logo"
            width={80}
            height={80}
            className={`${styles.companyLogo} ${styles.logo1}`}
          />
          <Image
            src="/jana.jpeg"
            alt="Jana Logo"
            width={80}
            height={80}
            className={`${styles.companyLogo} ${styles.logo2}`}
          />
          <Image
            src="/nojumi logo.jpeg"
            alt="Nojumi Logo"
            width={80}
            height={80}
            className={`${styles.companyLogo} ${styles.logo3}`}
          />
          <Image
            src="/rogers.png"
            alt="Rogers Logo"
            width={80}
            height={80}
            className={`${styles.companyLogo} ${styles.logo4}`}
          />
          <Image
            src="/relay.jpg"
            alt="Relay Logo"
            width={80}
            height={80}
            className={`${styles.companyLogo} ${styles.logo5}`}
          />
        </div>
      </div>
    </SectionCard>
  );
}
