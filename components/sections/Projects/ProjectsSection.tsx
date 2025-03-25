import React from 'react';
import SectionCard from '../../../components/SectionCard/SectionCard';
import ProjectCard from './ProjectCard';
import styles from './ProjectsSection.module.css';

const projects = [
  {
    title: 'CallGPT',
    description: 'A voice-based AI assistant powered by GPT-4, offering natural conversations and task assistance',
    imageUrl: '/callgpt.png',
    projectUrl: 'https://devpost.com/software/callgpt',
    tags: ['⭐️ DeerHacks winner', 'Python', 'OpenAI', 'Speech Recognition', 'SQLite']
  },
  {
    title: 'UofTBoard',
    description: 'A centralized dashboard for University of Toronto students to manage courses, assignments, and campus life',
    imageUrl: '/uboard design.png',
    projectUrl: 'https://github.com/utmgdsc/UBoard',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Express', 'GDSC']
  },
  {
    title: 'MMAMetrics 3',
    description: 'Web Scraping and Data Visualization for MMA Statistics',
    imageUrl: '/mma.png',
    projectUrl: 'https://github.com/gurvirsasan/mmametrics',
    tags: ['React', 'Cheerio', 'Express']
  },
  {
    title: 'Restify',
    description: 'Restaurant reservation system',
    imageUrl: '/restify.png',
    projectUrl: 'https://github.com/gurvirsasan/restify',
    tags: ['Python', 'React', 'Django', 'DRF']
  }
];

export default function ProjectsSection() {
  return (
    <div style={{ minHeight: '120vh' }}>
      <SectionCard id="projects" title="My Projects" isTallSection={true}>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              projectUrl={project.projectUrl}
              tags={project.tags}
            />
          ))}
        </div>
      </SectionCard>
    </div>
  );
} 