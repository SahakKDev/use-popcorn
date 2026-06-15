import styles from './MoviesSummary.module.css';

export default function MoviesSummary({ movies }) {
  console.log('movies', movies);

  const averageRating =
    movies.reduce((acc, movie) => acc + Number(movie.imdbRating), 0) /
      movies.length || 0.0;

  const averageUserRate =
    movies.reduce((acc, movie) => acc + Number(movie.UserRate), 0) /
      movies.length || 0.0;

  const totalTime = movies.reduce((acc, movie) => {
    const time = Number(movie.Runtime.split(' ')[0]);
    return acc + time;
  }, 0);

  return (
    <div>
      <div className={styles.summary}>
        <h2 className={styles.summaryTitle}>Movies You Watched</h2>
        <div className={styles.details}>
          <div className={styles.detail}>
            <span className={styles.icon}>#️⃣</span>
            <span className={styles.label}>{movies.length} movies</span>
          </div>
          <div className={styles.detail}>
            <span className={styles.icon}>⭐</span>
            <span className={styles.label}>{averageRating.toFixed(1)}</span>
          </div>
          <div className={styles.detail}>
            <span className={styles.icon}>🌟</span>
            <span className={styles.label}>{averageUserRate.toFixed(1)}</span>
          </div>
          <div className={styles.detail}>
            <span className={styles.icon}>⏳</span>
            <span className={styles.label}>{totalTime} min</span>
          </div>
        </div>
      </div>

      <br />
      {movies.map((movie) => {
        return (
          <div key={movie.imdbID} className={styles.movie}>
            {movie.Title}
          </div>
        );
      })}
    </div>
  );
}
