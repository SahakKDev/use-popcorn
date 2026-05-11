import Star from '../utils/Star/Star';
import styles from './MovieDetails.module.css';

import StarRate from '../utils/Star/StarRate';

export default function MovieDetails({ movie, onClose }) {
  return (
    <div className={styles.wrapper}>
      <button className={styles.backBtn} onClick={onClose}>
        &larr;
      </button>
      <img className={styles.poster} src={movie.Poster} alt='poster image' />

      <div className={styles.info}>
        <h2 className={styles.title}>{movie.Title}</h2>

        <p className={styles.dateAndTime}>
          {movie.Released} • {movie.Runtime}
        </p>

        <p className={styles.genre}>{movie.Genre}</p>

        <p className={styles.rating}>
          <Star size={22} color='#FFD700' quantity={1} fill />{' '}
          <span>{movie.imdbRating}</span> IMDb rating
        </p>
      </div>

      <div className={styles.rate}>
        <StarRate size={25} color='#FFD700' />
      </div>

      <div className={styles.description}>
        {movie.Plot}
        <br />
        <br />
        <span>Starring:</span> {movie.Actors}
        <br />
        <br />
        <span>Directed by:</span> {movie.Director}
      </div>
    </div>
  );
}
