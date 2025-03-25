import SectionCard from '../../SectionCard/SectionCard';
import styles from './SkillsSection.module.css';
import { 
  SiPython, SiScala, SiTypescript, SiJavascript, SiKotlin, SiC, 
  SiHtml5, SiCss3, SiPostgresql, SiSqlite,
  SiReact, SiReactrouter, SiAngular, SiNodedotjs, SiFramework,
  SiRedux, SiNextdotjs, SiJquery, SiExpress, SiJest,
  SiGit, SiJira, SiPostman, SiDocker, SiAmazon
} from 'react-icons/si';
import { FaJava, FaTerminal, FaDatabase } from 'react-icons/fa';

const languages = [
  { name: 'Python', icon: SiPython },
  { name: 'Scala', icon: SiScala },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Java', icon: FaJava },
  { name: 'Kotlin', icon: SiKotlin },
  { name: 'C', icon: SiC },
  { name: 'HTML/CSS', icon: SiHtml5 },
  { name: 'Bash', icon: FaTerminal },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'SQLite', icon: SiSqlite },
];

const technologies = [
  { name: 'React', icon: SiReact },
  { name: 'React Native', icon: SiReactrouter },
  { name: 'Angular', icon: SiAngular },
  { name: 'Node', icon: SiNodedotjs },
  { name: 'Play', icon: SiFramework },
  { name: 'Redux', icon: SiRedux },
  { name: 'Next', icon: SiNextdotjs },
  { name: 'JQuery', icon: SiJquery },
  { name: 'Express', icon: SiExpress },
  { name: 'Jest', icon: SiJest },
  { name: 'Git', icon: SiGit },
  { name: 'Jira', icon: SiJira },
  { name: 'Postman', icon: SiPostman },
  { name: 'Docker', icon: SiDocker },
  { name: 'Plaid', icon: FaDatabase },
  { name: 'AWS', icon: SiAmazon },
];

export default function SkillsSection() {
  return (
    <SectionCard id="skills" title="Skills" isTallSection={true}>
      <div className={styles.skillsContainer}>
        <div className={styles.skillsSection}>
          <h3 className={styles.sectionTitle}>Languages</h3>
          <div className={styles.skillsGrid}>
            {languages.map((skill) => (
              <div key={skill.name} className={styles.skillCard}>
                <skill.icon className={styles.skillIcon} />
                <span className={styles.skillName}>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.skillsSection}>
          <h3 className={styles.sectionTitle}>Technologies</h3>
          <div className={styles.skillsGrid}>
            {technologies.map((skill) => (
              <div key={skill.name} className={styles.skillCard}>
                <skill.icon className={styles.skillIcon} />
                <span className={styles.skillName}>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionCard>
  );
} 