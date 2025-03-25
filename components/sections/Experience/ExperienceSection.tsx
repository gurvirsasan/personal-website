import { useState } from 'react';
import SectionCard from '../../SectionCard/SectionCard';
import styles from './ExperienceSection.module.css';
import Image from 'next/image';
import GradientButton from '../../GradientButton/GradientButton';

interface Experience {
  year: number;
  company: string;
  logo: string;
  role: string;
  duration: string;
  relevant: boolean;
}

export default function ExperienceSection() {
  const [showRelevant, setShowRelevant] = useState(false);
  let experiences: Experience[] = [
    {
      year: 2021,
      company: 'GDSC',
      logo: '/gdsc.png',
      role: 'Lead Engineer',
      duration: 'Sept 2021- Jan 2022',
      relevant: true
    },
    {
      year: 2021,
      company: 'Rogers',
      logo: '/rogers.png',
      role: 'Sales Associate',
      duration: 'Sept 2021- May 2022',
      relevant: false
    },
    {
      year: 2022,
      company: 'Jana Corporation',
      logo: '/jana.jpeg',
      role: 'Software Developer PEY',
      duration: 'May 2022 - Aug 2023',
      relevant: true
    },
    {
      year: 2023,
      company: 'UofT - UTAP Project',
      logo: '/uoft.png',
      role: 'Software Developer',
      duration: 'Sept 2023 - Dec 2023',
      relevant: true
    },
    {
      year: 2023,
      company: 'Rogers',
      logo: '/rogers.png',
      role: 'Sales Associate',
      duration: 'Sept 2023 - May 2024',
      relevant: false
    },
    {
      year: 2024,
      company: 'Apple',
      logo: '/apple.png',
      role: 'Specialist',
      duration: 'May 2024 - Oct 2024',
      relevant: false
    },
    {
      year: 2024,
      company: 'Nojumi Solutions',
      logo: '/nojumi logo.jpeg',
      role: 'Software Developer',
      duration: 'Oct 2024 - Present',
      relevant: true
    },
    // {
    //   year: 2025,
    //   company: 'Relay Financial',
    //   logo: '/relay.jpg',
    //   role: 'Software Engineer II',
    //   duration: 'Apr 2025 - Present'
    // }
  ];

  if (showRelevant) {
    experiences = experiences.filter((exp) => exp.relevant);
  }

  return (
    <SectionCard id="experience" title="Experience" isTallSection={true} noBackground={true}>
      <div className={styles.description} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '2rem' }}>
          <GradientButton onClick={() => setShowRelevant(!showRelevant)}>
            {showRelevant ? 'Show All' : 'Only Software'}
          </GradientButton>
        </div>
        <div className={styles.timeline}>
          {experiences.reverse().map((exp, index) => (
            <div key={`${exp.year}-${exp.company}-${index}`} className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <div className={styles.year}>{exp.year}</div>
                <div className={styles.companyInfo}>
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    width={90}
                    height={90}
                    className={styles.companyLogo}
                  />
                  <div className={styles.companyDetails}>
                    <h3>{exp.company}</h3>
                    <p className={styles.role}>{exp.role}</p>
                    <p className={styles.duration}>{exp.duration}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionCard>
  );
} 