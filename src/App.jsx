import Header from './components/Header/Header';
import MoviesBox from './components/MoviesBox';

import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.root}>
      <Header />
      <main className={styles.main}>
        <MoviesBox />
        <MoviesBox />
      </main>
    </div>
  );
}
