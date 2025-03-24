import styles from './styles/Background.module.css';

export default function Background() {
  return (
    <div className={styles.background}>
      <div className={styles.purpleCircle}></div>
      <div className={styles.redCircle}></div>
      <div className={styles.greenCircle}></div>
    </div>
  );
} 