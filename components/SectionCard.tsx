import styles from '../styles/Home.module.css';

interface SectionCardProps {
  title: string;
  children: React.ReactNode;
  id: string;
}

export default function SectionCard({ title, children, id }: SectionCardProps) {
  return (
    <section id={id} className={styles.section} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className={styles.container} style={{ width: '98%', maxWidth: '1200px', padding: '2rem' }}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <div className={styles.description}>{children}</div>
      </div>
    </section>
  );
} 