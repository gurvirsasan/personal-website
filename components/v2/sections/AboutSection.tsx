import Image from 'next/image';
import Section from '../Section';
import Heading from '../../ui/Heading';
import Text from '../../ui/Text';
import Badge from '../../ui/Badge';
import plate from '../mediaPlate.module.css';
import styles from './AboutSection.module.css';

const CS_COURSES = [
  ['CSC207', 'Software Design'],
  ['CSC209', 'Software Tools & Systems'],
  ['CSC236', 'Theory of Computation'],
  ['CSC258', 'Computer Organization'],
  ['CSC263', 'Data Structures & Analysis'],
  ['CSC309', 'Programming on the Web'],
  ['CSC343', 'Databases'],
  ['CSC392', 'Implementation Project'],
  ['CSC492', 'Advanced Implementation'],
] as const;

const STA_COURSES = [
  ['STA256', 'Probability I'],
  ['STA260', 'Probability II'],
  ['STA302', 'Regression'],
  ['STA304', 'Survey Sampling'],
  ['STA305', 'Experimental Design'],
] as const;

export default function AboutSection() {
  return (
    <Section id="education">
      <header className={styles.intro}>
        <span className={styles.kicker}>University of Toronto</span>
        <Heading level={2} balance>
          Education
        </Heading>
        <Text variant="lead" balance>
          Honours B.Sc. — computer science, mathematics & statistics. Coursework skewed toward systems, theory, and
          the web.
        </Text>
      </header>

      <div className={styles.bento}>
        <article className={styles.heroCell}>
          <div className={styles.heroTop}>
            <div className={`${plate.plate} ${styles.logoPlate}`}>
              <Image src="/uoft.png" alt="University of Toronto crest" width={112} height={112} className={styles.logoImg} />
            </div>
            <div className={styles.heroMeta}>
              <p className={styles.degree}>Honours Bachelor of Science</p>
              <p className={styles.years}>2019 — 2024</p>
              <div className={styles.tagRow}>
                <Badge tone="accent">CS specialist</Badge>
                <Badge tone="outline">Math & stats</Badge>
              </div>
            </div>
          </div>
          <ul className={styles.wins}>
            <li>Graduated with Distinction</li>
            <li>Dean&apos;s List Scholar (2020–2021)</li>
            <li>Google Developer Student Club</li>
          </ul>
        </article>

        <aside className={styles.sideCell}>
          <p className={styles.sideTitle}>At a glance</p>
          <p className={styles.sideBody}>
            Heavy emphasis on software design, systems programming, and data structures — plus statistics for rigorous
            experimentation and modeling.
          </p>
        </aside>

        <div className={styles.trackCell}>
          <p className={styles.trackLabel}>Computer science</p>
          <div className={styles.pillTrack}>
            {CS_COURSES.map(([code, name]) => (
              <span key={code} className={styles.pill} title={name}>
                <strong>{code}</strong>
                <span className={styles.pillName}>{name}</span>
              </span>
            ))}
          </div>
        </div>

        <div className={styles.trackCellAlt}>
          <p className={styles.trackLabel}>Statistics</p>
          <div className={styles.pillTrack}>
            {STA_COURSES.map(([code, name]) => (
              <span key={code} className={styles.pillAlt} title={name}>
                <strong>{code}</strong>
                <span className={styles.pillName}>{name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
