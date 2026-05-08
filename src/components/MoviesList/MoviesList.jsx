import MovieItem from './MovieItem';

export default function MoviesList({ movies, onSelect }) {
  return (
    <ul>
      {movies.map((movie) => {
        return (
          <MovieItem key={movie.imdbID} movie={movie} onClick={onSelect} />
        );
      })}
    </ul>
  );
}
