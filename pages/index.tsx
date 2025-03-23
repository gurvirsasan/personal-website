import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '../styles/Home.module.css';
import ThemeToggle from '../components/ThemeToggle';
import Header from '../components/Header';

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
        <section id="home" className={styles.section}>
          <div className={styles.container}>
            <h1 className={styles.title}>Welcome to My Website</h1>
            <p className={styles.description}>Your content goes here</p>
          </div>
        </section>

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
