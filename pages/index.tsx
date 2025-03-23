import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '../styles/Home.module.css';
import ThemeToggle from '../components/ThemeToggle';
import Header from '../components/Header';
import HomeSection from '../components/sections/Home/HomeSection';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Gurvir Portfolio</title>
        <meta name="description" content="My personal website" />
      </Head>
      <Header />
      <ThemeToggle />
      
      <main className={styles.main}>
        <HomeSection/>

        <section id="about" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>About Me</h2>
            <p className={styles.description}>Tell your story here</p>
          </div>
        </section>

        <section id="projects" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Projects</h2>
            <p className={styles.description}>Showcase your work here</p>
          </div>
        </section>

        <section id="skills" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Skills</h2>
            <p className={styles.description}>List your skills here</p>
          </div>
        </section>

        <section id="experience" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.description}>Share your experience here</p>
          </div>
        </section>

        <section id="contact" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Contact</h2>
            <p className={styles.description}>Get in touch here</p>
          </div>
        </section>
      </main>
    </>
  );
}
