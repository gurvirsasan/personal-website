import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '../styles/Home.module.css';
import ThemeToggle from '../components/ThemeToggle';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to My Website</title>
        <meta name="description" content="My personal website" />
      </Head>
      <ThemeToggle />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Welcome to My Website</h1>
          <p className={styles.description}>Your content goes here</p>
        </div>
      </main>
    </>
  );
}
