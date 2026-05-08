import styles from './MoviesBox.module.css';

export default function MoviesBox({ children, error, loading }) {
  if (error) {
    return <div className={`${styles.info} ${styles.box}`}>⛔ Movies not found</div>;
  }

  if (loading) {
    return <div className={`${styles.info} ${styles.box}`}>⌛ Loading...</div>;
  }

  return <div className={styles.box}>{children}</div>;
}
