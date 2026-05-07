import styles from './MoviesList.module.css';

import MovieItem from './MovieItem';

export default function MoviesList({ movies, error, loading }) {
  if (error) {
    return <div className={styles.info}>⛔ Movies not found</div>;
  }

  if (loading) {
    return <div className={styles.info}>⌛ Loading...</div>;
  }

  return (
    <ul className={styles.movies}>
      {movies.map((movie) => {
        return <MovieItem key={movie.imdbID} movie={movie} />;
      })}
    </ul>
  );
}
