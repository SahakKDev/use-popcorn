import styles from './Header.module.css';
import popcornIcon from '../assets/popcurn.png';
import Search from './Search';

export default function Header({ resultsCount = 0 }) {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <img className={styles.logo} src={popcornIcon} alt='popcorn' />
        <h1>usePopcorn</h1>
      </div>

      <Search placeholder='Search movies...' />

      <div className={styles.right}>
        Found <b>{resultsCount}</b> result{resultsCount !== 1 ? 's' : ''}
      </div>
    </div>
  );
}
