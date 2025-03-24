import Head from 'next/head';
import Header from '../components/Header/Header';
import Background from '../components/Background/Background';
import HomeSection from '../components/sections/Home/HomeSection';
import AboutSection from '../components/sections/About/AboutSection';
import ProjectsSection from '../components/sections/Projects/ProjectsSection';
import SkillsSection from '../components/sections/Skills/SkillsSection';
import ExperienceSection from '../components/sections/Experience/ExperienceSection';
import ContactSection from '../components/sections/Contact/ContactSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Gurvir Sasan</title>
        <meta name="description" content="Personal website of Gurvir Sasan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background />
      <Header />
      <main>
        <HomeSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
