import Header from '../components/Header/Header';
import Background from '../components/Background/Background';
import HomeSection from '../components/sections/Home/HomeSection';
import AboutSection from '../components/sections/Education/AboutSection';
import ProjectsSection from '../components/sections/Projects/ProjectsSection';
import SkillsSection from '../components/sections/Skills/SkillsSection';
import ExperienceSection from '../components/sections/Experience/ExperienceSection';
import ContactSection from '../components/sections/Contact/ContactSection';
import DownloadButton from '../components/DownloadButton/DownloadButton';
import Portfolio from '../components/v2/Portfolio';

export default function Home() {
  const showOldSite = process.env.NEXT_PUBLIC_SHOW_OLD_SITE === 'true';

  return <>{showOldSite ? <NewSite /> : <OldSite />}</>;
}

const NewSite = () => {
  return <Portfolio />;
};


const OldSite = () => {
  return (
    <div className="site-v1">
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
    </div>
  );
};