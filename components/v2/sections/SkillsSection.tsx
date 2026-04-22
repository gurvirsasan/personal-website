import Section from '../Section';
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
  SiNextdotjs,
  SiJquery,
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
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Python', icon: SiPython },
  { name: 'Java', icon: FaJava },
  { name: 'Kotlin', icon: SiKotlin },
  { name: 'C', icon: SiC },
  { name: 'Scala', icon: SiScala },
  { name: 'HTML/CSS', icon: SiHtml5 },
  { name: 'Bash', icon: FaTerminal },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'SQLite', icon: SiSqlite },
];

const technologies = [
  { name: 'React', icon: SiReact },
  { name: 'Angular', icon: SiAngular },
  { name: 'React Native', icon: SiReactrouter },
  { name: 'Node', icon: SiNodedotjs },
  { name: 'Play', icon: SiFramework },
  { name: 'Redux', icon: SiRedux },
  { name: 'Next', icon: SiNextdotjs },
  { name: 'AWS', icon: SiAmazon },
  { name: 'Express', icon: SiExpress },
  { name: 'Jest', icon: SiJest },
  { name: 'Git', icon: SiGit },
  { name: 'Jira', icon: SiJira },
  { name: 'Postman', icon: SiPostman },
  { name: 'Docker', icon: SiDocker },
  { name: 'Plaid', icon: FaDatabase },
  { name: 'JQuery', icon: SiJquery },
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

        <Card variant="gradientBorder" padding="lg" className={styles.panel}>
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
                  <div key={name} className={styles.orb}>
                    <span className={styles.orbIcon} aria-hidden>
                      <Icon />
                    </span>
                    <span className={styles.orbLabel}>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
