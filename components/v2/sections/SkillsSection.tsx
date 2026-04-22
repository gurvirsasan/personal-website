import Section from '../Section';
import SurfaceLift from '../../ui/SurfaceLift';
import Heading from '../../ui/Heading';
import Text from '../../ui/Text';
import Card from '../../ui/Card';
import {
  SiPython,
  SiScala,
  SiTypescript,
  SiKotlin,
  SiC,
  SiHtml5,
  SiPostgresql,
  SiSqlite,
  SiReact,
  SiReactrouter,
  SiAngular,
  SiNodedotjs,
  SiFramework,
  SiRedux,
  SiExpress,
  SiJest,
  SiGit,
  SiJira,
  SiPostman,
  SiDocker,
  SiAmazon,
} from 'react-icons/si';
import { FaJava, FaTerminal, FaDatabase } from 'react-icons/fa';
import styles from './SkillsSection.module.css';

const languages = [
  { name: 'TypeScript (ES6)', icon: SiTypescript },
  { name: 'Python', icon: SiPython },
  { name: 'Scala', icon: SiScala },
  { name: 'Java', icon: FaJava },
  { name: 'Kotlin', icon: SiKotlin },
  { name: 'C', icon: SiC },
  { name: 'Bash', icon: FaTerminal },
  { name: 'SQL', icon: FaDatabase },
  { name: 'HTML/CSS', icon: SiHtml5 },
];

const technologies = [
  { name: 'React', icon: SiReact },
  { name: 'React Native', icon: SiReactrouter },
  { name: 'Angular', icon: SiAngular },
  { name: 'Redux', icon: SiRedux },
  { name: 'RTK Query', icon: SiRedux },
  { name: 'Node', icon: SiNodedotjs },
  { name: 'Express', icon: SiExpress },
  { name: 'Play Framework', icon: SiFramework },
  { name: 'AWS', icon: SiAmazon },
  { name: 'Kafka', icon: FaDatabase },
  { name: 'Redis', icon: FaDatabase },
  { name: 'Webhooks', icon: FaDatabase },
  { name: 'Datadog', icon: FaDatabase },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Django', icon: FaDatabase },
  { name: 'SQLite', icon: SiSqlite },
  { name: 'ESRI', icon: FaDatabase },
  { name: 'Docker', icon: SiDocker },
  { name: 'Git', icon: SiGit },
  { name: 'Jest', icon: SiJest },
  { name: 'Jira', icon: SiJira },
  { name: 'Postman', icon: SiPostman },
  { name: 'Bruno', icon: FaDatabase },
];

export default function SkillsSection() {
  return (
    <Section id="skills">
      <header className={styles.intro}>
        <Heading level={2} balance>
          Skills
        </Heading>
        <Text variant="muted" balance>
          Languages on a tight rail, frameworks as a looser field — closer to how memory actually feels than two equal grids.
        </Text>
      </header>

      <div className={styles.stage}>
        <div className={styles.glow} aria-hidden />

        <Card variant="gradientBorder" padding="lg" interactive className={styles.panel}>
          <div className={styles.split}>
            <div className={styles.railCol}>
              <p className={styles.kicker}>Languages</p>
              <ul className={styles.rail}>
                {languages.map(({ name, icon: Icon }) => (
                  <li key={name} className={styles.railItem}>
                    <span className={styles.railIcon} aria-hidden>
                      <Icon />
                    </span>
                    <span className={styles.railName}>{name}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.fieldCol}>
              <p className={styles.kicker}>Technologies</p>
              <div className={styles.field}>
                {technologies.map(({ name, icon: Icon }) => (
                  <SurfaceLift key={name} variant="compact" className={styles.orb}>
                    <span className={styles.orbIcon} aria-hidden>
                      <Icon />
                    </span>
                    <span className={styles.orbLabel}>{name}</span>
                  </SurfaceLift>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
