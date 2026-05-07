import placeHolderImage from '../../assets/placeholder.png';
import styles from './MovieItem.module.css';

export default function MovieItem({ movie }) {
  const imageUrl = movie.Poster === 'N/A' ? placeHolderImage : movie.Poster;

  return (
    <li className={styles.movie}>
      <img src={imageUrl} alt='movie poster' />
      <h2>{movie.Title}</h2>
      <p>
        <span>🗓</span> &nbsp;
        <span>{movie.Year}</span>
      </p>
    </li>
  );
}
