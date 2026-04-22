import { useMemo, useState } from 'react';
import Image from 'next/image';
import Section from '../Section';
import Heading from '../../ui/Heading';
import Text from '../../ui/Text';
import Button from '../../ui/Button';
import plate from '../mediaPlate.module.css';
import styles from './ExperienceSection.module.css';

type Experience = {
  year: number;
  company: string;
  logo: string;
  role: string;
  duration: string;
  relevant: boolean;
};

const EXPERIENCES: Experience[] = [
  { year: 2021, company: 'GDSC', logo: '/gdsc.png', role: 'Lead Engineer', duration: 'Sept 2021 – Jan 2022', relevant: true },
  { year: 2021, company: 'Rogers', logo: '/rogers.png', role: 'Sales Associate', duration: 'Sept 2021 – May 2022', relevant: false },
  { year: 2022, company: 'Jana Corporation', logo: '/jana.jpeg', role: 'Software Developer PEY', duration: 'May 2022 – Aug 2023', relevant: true },
  { year: 2023, company: 'UofT - UTAP', logo: '/uoft.png', role: 'Software Developer', duration: 'Sept 2023 – Dec 2023', relevant: true },
  { year: 2023, company: 'Rogers', logo: '/rogers.png', role: 'Sales Associate', duration: 'Sept 2023 – May 2024', relevant: false },
  { year: 2024, company: 'Apple', logo: '/apple.png', role: 'Specialist', duration: 'May 2024 – Oct 2024', relevant: false },
  { year: 2024, company: 'Nojumi Solutions', logo: '/nojumi logo.jpeg', role: 'Software Developer', duration: 'Oct 2024 – Apr 2025', relevant: true },
  { year: 2025, company: 'Relay Financial', logo: '/relay.jpg', role: 'Software Engineer II', duration: 'Apr 2025 – Present', relevant: true },
];

export default function ExperienceSection() {
  const [onlySoftware, setOnlySoftware] = useState(false);
  const list = useMemo(
    () => (onlySoftware ? EXPERIENCES.filter((e) => e.relevant) : EXPERIENCES).slice().reverse(),
    [onlySoftware],
  );

  return (
    <Section id="experience">
      <div className={styles.header}>
        <div>
          <Heading level={2} balance>
            Experience
          </Heading>
          <Text variant="muted" balance>
            A winding path through campus leadership, PEY, and product engineering — swipe on mobile.
          </Text>
        </div>
        <div className={styles.toggle}>
          <Button type="button" variant={onlySoftware ? 'primary' : 'secondary'} size="sm" onClick={() => setOnlySoftware(true)}>
            Software
          </Button>
          <Button type="button" variant={!onlySoftware ? 'primary' : 'secondary'} size="sm" onClick={() => setOnlySoftware(false)}>
            All roles
          </Button>
        </div>
      </div>

      <div className={styles.scroller}>
        <ul className={styles.strip}>
          {list.map((exp) => (
            <li key={`${exp.year}-${exp.company}`} className={styles.slide}>
              <article className={styles.card}>
                <span className={styles.year}>{exp.year}</span>
                <div className={`${plate.plateSm} ${styles.logoPlate}`}>
                  <Image src={exp.logo} alt={`${exp.company} logo`} width={48} height={48} className={styles.logo} />
                </div>
                <h3 className={styles.company}>{exp.company}</h3>
                <p className={styles.role}>{exp.role}</p>
                <p className={styles.when}>{exp.duration}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
