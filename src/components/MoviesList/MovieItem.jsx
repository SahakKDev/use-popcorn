import placeHolderImage from '../../assets/placeholder.png';
import styles from './MovieItem.module.css';

export default function MovieItem({ movie, onClick }) {
  const imageUrl = movie.Poster === 'N/A' ? placeHolderImage : movie.Poster;

  function handleClick() {
    onClick(movie.imdbID)
  }

  return (
    <li className={styles.movie} onClick={handleClick}>
      <img src={imageUrl} alt='movie poster' />
      <h2>{movie.Title}</h2>
      <p>
        <span>🗓</span> &nbsp;
        <span>{movie.Year}</span>
      </p>
    </li>
  );
}
