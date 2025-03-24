import styles from '../styles/Home.module.css';

interface SectionCardProps {
  title: string;
  children: React.ReactNode;
  id: string;
  isFirstSection?: boolean;
}

export default function SectionCard({ title, children, id, isFirstSection = false }: SectionCardProps) {
  return (
    <section 
      id={id} 
      className={styles.section} 
      style={{ 
        height: '100vh', 
        minHeight: '100vh',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        paddingTop: '1rem',
        marginTop: '-3rem',
        marginBottom: '0.5rem'
      }}
    >
      <div className={styles.container} style={{ 
        width: '98%', 
        maxWidth: '1200px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <div className={styles.description}>{children}</div>
      </div>
    </section>
  );
} 