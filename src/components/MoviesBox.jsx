import styles from './MoviesBox.module.css';

export default function MoviesBox({ children }) {
  return <div className={styles.box}>{children}</div>;
}
