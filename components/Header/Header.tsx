import { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'education', 'experience', 'projects', 'skills', 'contact'];
      const viewportHeight = window.innerHeight;
      const viewportMiddle = viewportHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= viewportMiddle && bottom >= viewportMiddle) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      const offset = 50;
      const scrollPosition = elementTop - offset;
      
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <button
          className={`${styles.navLink} ${activeSection === 'home' ? styles.active : ''}`}
          onClick={() => scrollToSection('home')}
        >
          Home
        </button>
        <button
          className={`${styles.navLink} ${activeSection === 'education' ? styles.active : ''}`}
          onClick={() => scrollToSection('education')}
        >
          Education
        </button>
        <button
          className={`${styles.navLink} ${activeSection === 'experience' ? styles.active : ''}`}
          onClick={() => scrollToSection('experience')}
        >
          Experience
        </button>
        <button
          className={`${styles.navLink} ${activeSection === 'projects' ? styles.active : ''}`}
          onClick={() => scrollToSection('projects')}
        >
          Projects
        </button>
        <button
          className={`${styles.navLink} ${activeSection === 'skills' ? styles.active : ''}`}
          onClick={() => scrollToSection('skills')}
        >
          Skills
        </button>
        <button
          className={`${styles.navLink} ${activeSection === 'contact' ? styles.active : ''}`}
          onClick={() => scrollToSection('contact')}
        >
          Contact
        </button>
      </nav>
    </header>
  );
} 