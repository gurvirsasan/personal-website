import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '../styles/Home.module.css';
import ThemeToggle from '../components/ThemeToggle';
import Header from '../components/Header';
import HomeSection from '../components/sections/Home/HomeSection';
import AboutSection from '../components/sections/About/AboutSection';
import ProjectsSection from '../components/sections/Projects/ProjectsSection';
import SkillsSection from '../components/sections/Skills/SkillsSection';
import ExperienceSection from '../components/sections/Experience/ExperienceSection';
import ContactSection from '../components/sections/Contact/ContactSection';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to My Website</title>
        <meta name="description" content="My personal website" />
      </Head>
      <Header />
      <ThemeToggle />
      
      <main className={styles.main}>
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </>
  );
}
