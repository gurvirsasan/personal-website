import styles from './SectionCard.module.css';

interface SectionCardProps {
  title?: string;
  children: React.ReactNode;
  id: string;
  isFirstSection?: boolean;
  isTallSection?: boolean;
  hasGradient?: boolean;
  noBackground?: boolean;
  customHeight?: string;
}

export default function SectionCard({
  title,
  children,
  id,
  isFirstSection = false,
  isTallSection = false,
  hasGradient = false,
  noBackground = false,
  customHeight,
}: SectionCardProps) {
  // Split children into title content and main content
  let titleContent = null;
  let mainContent = children;
  
  if (Array.isArray(children)) {
    const [first, ...rest] = children;
    if (first?.type === 'div') {
      titleContent = first;
      mainContent = rest;
    }
  }

  return (
    <section
      id={id}
      className={styles.section}
      style={{
        height: customHeight || (isTallSection ? 'auto' : '100vh'),
        minHeight: customHeight || '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: isFirstSection ? '8rem' : '4rem',
        paddingBottom: '4rem',
        marginBottom: '0',
        opacity: '1',
      }}
    >
      <div
        className={`${styles.container} ${hasGradient ? styles.gradientContainer : ''} ${noBackground ? styles.noBackground : ''}`}
        style={{
          width: '100%',
          maxWidth: '2000px',
          height: isTallSection ? 'auto' : '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: isFirstSection ? 'center' : 'flex-start',
          marginTop: '-4rem',
          padding: '0 2rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', width: '100%', justifyContent: 'center' }}>
          {title && <h2 className={styles.sectionTitle}>{title}</h2>}
          {titleContent}
        </div>
        <div className={styles.description}>{mainContent}</div>
      </div>
    </section>
  );
}
