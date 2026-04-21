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
  const showNewSite = process.env.NEXT_PUBLIC_SHOW_NEW_SITE === "true";

  return (
    <>
      { showNewSite ? <NewSite /> : <OldSite/>}
    </>
  );
}

const NewSite = () => {
  return (
    <h1> hello new site v2</h1>
  )
}


const OldSite = () => {
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
  )
}