import Section from '../Section';
import Heading from '../../ui/Heading';
import Text from '../../ui/Text';
import ProjectCard from './ProjectCard';
import styles from './ProjectsSection.module.css';

const PROJECTS = [
  {
    title: 'CallGPT',
    description: 'Voice-based AI assistant powered by GPT-4 — natural conversations and task help.',
    imageUrl: '/callgpt-cover.png',
    projectUrl: 'https://devpost.com/software/callgpt',
    tags: ['DeerHacks winner', 'Python', 'OpenAI', 'Speech', 'SQLite'],
  },
  {
    title: 'UofTBoard',
    description: 'Centralized dashboard for UofT students — courses, assignments, and campus life.',
    imageUrl: '/uboard design.png',
    projectUrl: 'https://github.com/utmgdsc/UBoard',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Express', 'GDSC'],
  },
  {
    title: 'MMAMetrics',
    description: 'Scraping and visualization pipeline for MMA statistics.',
    imageUrl: '/mma.png',
    projectUrl: 'https://github.com/gurvirsasan/mmametrics',
    tags: ['React', 'Cheerio', 'Express'],
  },
  {
    title: 'Restify',
    description: 'Restaurant reservations — full-stack Django + React.',
    imageUrl: '/restify.png',
    projectUrl: 'https://github.com/gurvirsasan/restify',
    tags: ['Python', 'React', 'Django', 'DRF'],
  },
];

export default function ProjectsSection() {
  return (
    <Section id="projects">
      <header className={styles.intro}>
        <Heading level={2} balance>
          Projects
        </Heading>
        <Text variant="muted" balance>
          Projects that started from the basics, snowballed my learning, and shaped how I build real products.
        </Text>
      </header>

      <div className={styles.layout}>
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </Section>
  );
}
