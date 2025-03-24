import styles from '../styles/Home.module.css';

interface SectionCardProps {
  title?: string;
  children: React.ReactNode;
  id: string;
  isFirstSection?: boolean;
}

export default function SectionCard({
  title,
  children,
  id,
  isFirstSection = false,
}: SectionCardProps) {
  return (
    <section
      id={id}
      className={styles.section}
      style={{
        height: '100vh',
        minHeight: '100vh',
        minWidth: '90vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: isFirstSection ? '8rem' : '4rem',
        marginBottom: '2rem',
        opacity: '1',
      }}
    >
      <div
        className={styles.container}
        style={{
          width: '100%',
          maxWidth: '1400px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginTop: '-4rem',
        }}
      >
        {title && <h2 className={styles.sectionTitle}>{title}</h2>}
        <div className={styles.description}>{children}</div>
      </div>
    </section>
  );
}
