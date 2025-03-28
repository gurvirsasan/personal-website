import Header from '../components/Header/Header';
import Background from '../components/Background/Background';
import HomeSection from '../components/sections/Home/HomeSection';
import AboutSection from '../components/sections/Education/AboutSection';
import ProjectsSection from '../components/sections/Projects/ProjectsSection';
import SkillsSection from '../components/sections/Skills/SkillsSection';
import ExperienceSection from '../components/sections/Experience/ExperienceSection';
import ContactSection from '../components/sections/Contact/ContactSection';
import DownloadButton from '../components/DownloadButton/DownloadButton';

export default function Home() {
  return (
    <>
      <Background />
      <Header />
      <DownloadButton />
      <main>
        <HomeSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </>
  );
}
