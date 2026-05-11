import styles from './MoviesSummary.module.css'

export default function MoviesSummary({ movies }) {
  return <div>
    <div className={styles.summary}></div>
    {movies.map(movie => {
      return <div key={movie.imdbId} className={styles.movie}>{movie.Title}</div>
    })}
  </div>;
}
