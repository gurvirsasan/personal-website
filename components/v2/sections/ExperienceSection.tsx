import { useMemo, useState } from 'react';
import Image from 'next/image';
import Section from '../Section';
import SurfaceLift from '../../ui/SurfaceLift';
import Heading from '../../ui/Heading';
import Text from '../../ui/Text';
import Button from '../../ui/Button';
import plate from '../mediaPlate.module.css';
import styles from './ExperienceSection.module.css';

const MONTH_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'] as const;

type Experience = {
  company: string;
  logo: string;
  role: string;
  /** ISO year-month, e.g. `2021-09` */
  startYm: string;
  /** ISO year-month, or `'present'` */
  endYm: string | 'present';
  relevant: boolean;
};

const EXPERIENCES: Experience[] = [
  { company: 'GDSC', logo: '/gdsc.png', role: 'Lead Engineer', startYm: '2021-09', endYm: '2022-01', relevant: true },
  { company: 'Rogers', logo: '/rogers.png', role: 'Sales Associate', startYm: '2021-09', endYm: '2022-05', relevant: false },
  { company: 'Jana Corporation', logo: '/jana.jpeg', role: 'Software Developer PEY', startYm: '2022-05', endYm: '2023-08', relevant: true },
  { company: 'UofT - UTAP', logo: '/uoft.png', role: 'Software Developer', startYm: '2023-09', endYm: '2023-12', relevant: true },
  { company: 'Rogers', logo: '/rogers.png', role: 'Sales Associate', startYm: '2023-09', endYm: '2024-05', relevant: false },
  { company: 'Apple', logo: '/apple.png', role: 'Specialist', startYm: '2024-05', endYm: '2024-10', relevant: false },
  { company: 'Nojumi Solutions', logo: '/nojumi logo.jpeg', role: 'Software Developer', startYm: '2024-10', endYm: '2025-04', relevant: true },
  { company: 'Relay Financial', logo: '/relay.jpg', role: 'Software Engineer II', startYm: '2025-04', endYm: 'present', relevant: true },
];

function parseYm(ym: string): { y: number; m: number } {
  const [ys, ms] = ym.split('-');
  const y = Number(ys);
  const m = Number(ms);
  return { y, m };
}

function formatMonthYear(ym: string): string {
  const { y, m } = parseYm(ym);
  return `${MONTH_SHORT[m - 1]} ${y}`;
}

function formatDateRange(startYm: string, endYm: string | 'present'): string {
  const start = formatMonthYear(startYm);
  const end = endYm === 'present' ? 'Present' : formatMonthYear(endYm);
  return `${start} – ${end}`;
}

/** Inclusive calendar months from first of start month through end (last day of end month, or today if present). */
function inclusiveCalendarMonths(startYm: string, endYm: string | 'present'): number {
  const { y: sy, m: sm } = parseYm(startYm);
  const start = new Date(sy, sm - 1, 1);
  const end =
    endYm === 'present'
      ? new Date()
      : (() => {
          const { y: ey, m: em } = parseYm(endYm);
          return new Date(ey, em, 0);
        })();
  return (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;
}

/** LinkedIn-style: `1 yr`, `2 yrs`, `1 mo`, `3 mos`, combined e.g. `1 yr 2 mos`. */
function formatTenureMonths(totalMonths: number): string {
  if (totalMonths < 1) return '< 1 mo';
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts: string[] = [];
  if (years > 0) {
    parts.push(`${years} ${years === 1 ? 'yr' : 'yrs'}`);
  }
  if (months > 0) {
    parts.push(`${months} ${months === 1 ? 'mo' : 'mos'}`);
  }
  return parts.length > 0 ? parts.join(' ') : '< 1 mo';
}

function tenureLabel(exp: Experience): string {
  return formatTenureMonths(inclusiveCalendarMonths(exp.startYm, exp.endYm));
}

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
            Part-time sales during university, a computer science internship (PEY), and full-time software engineering
            since graduation.
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

      <ul className={styles.list}>
        {list.map((exp) => (
          <li key={`${exp.startYm}-${exp.company}-${exp.role}`} className={styles.item}>
            <SurfaceLift as="article" className={styles.card} data-experience-card="">
              <div className={styles.cardInner}>
                <div className={`${plate.plateSm} ${styles.logoPlate}`}>
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} — ${exp.role}`}
                    width={48}
                    height={48}
                    className={`${styles.logo} ${exp.logo === '/uoft.png' ? styles.logoUoftCrest : ''}`}
                  />
                </div>
                <div className={styles.body}>
                  <h3 className={styles.title}>{exp.role}</h3>
                  <p className={styles.company}>{exp.company}</p>
                  <p className={styles.when}>
                    {formatDateRange(exp.startYm, exp.endYm)}
                    <span className={styles.whenSep} aria-hidden>
                      {' '}
                      ·{' '}
                    </span>
                    <span className={styles.tenure}>{tenureLabel(exp)}</span>
                  </p>
                </div>
              </div>
            </SurfaceLift>
          </li>
        ))}
      </ul>
    </Section>
  );
}
