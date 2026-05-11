import { useState } from 'react';
import styles from './App.module.css';
import useFetch from './hooks/useFetch';
import { API_KEY } from './constants';

import Header from './components/Header/Header';
import MoviesBox from './components/MoviesBox';
import MoviesList from './components/MoviesList/MoviesList';
import MovieDetails from './components/MovieDetails/MovieDetails';
import MoviesSummary from './components/MoviesSummary/MoviesSummary';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const { movies, loading, error } = useFetch(searchTerm);

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedMovieError, setSelectedMovieError] = useState(null);
  const [selectedMovieLoading, setSelectedMovieLoading] = useState(false);

  const [ratedMovies, setRatedMovies] = useState([]);

  const [show, setShow] = useState({
    moviesList: true,
    moviesSummary: true,
  });

  function updateSearchTerm(movies) {
    setSearchTerm(movies);
  }

  async function handleSelectMovie(id) {
    if (id === selectedMovie?.imdbID) {
      setSelectedMovie(null);
      return;
    }
    setSelectedMovieLoading(true);
    setSelectedMovieError(null);
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`,
      );

      const movie = await response.json();

      setSelectedMovie(movie);
    } catch (err) {
      setSelectedMovieError(err);
    } finally {
      setSelectedMovieLoading(false);
    }
  }

  function handleCloseSelectedMovie() {
    setSelectedMovie(null);
  }

  function handleAddToList(rate) {
    setRatedMovies((prev) => [
      ...prev,
      {
        ...selectedMovie,
        UserRate: rate,
      },
    ]);

    setSelectedMovie(false)
  }

  return (
    <div className={styles.root}>
      <Header onSearch={updateSearchTerm} resultsCount={movies.length} />
      <main className={styles.main}>
        <MoviesBox error={error} loading={loading}>
          <button
            onClick={() =>
              setShow((p) => ({ ...p, moviesList: !p.moviesList }))
            }
            className={styles.toggleBtn}
          >
            {show.moviesList ? '-' : '+'}
          </button>
          {show.moviesList && (
            <MoviesList movies={movies} onSelect={handleSelectMovie} />
          )}
        </MoviesBox>
        <MoviesBox error={selectedMovieError} loading={selectedMovieLoading}>
          <button
            onClick={() =>
              setShow((p) => ({ ...p, moviesSummary: !p.moviesSummary }))
            }
            className={styles.toggleBtn}
          >
            {show.moviesSummary ? '-' : '+'}
          </button>
          {show.moviesSummary && (
            <>
              {selectedMovie && (
                <MovieDetails
                  movie={selectedMovie}
                  onClose={handleCloseSelectedMovie}
                  onAdd={handleAddToList}
                />
              )}
              {!selectedMovie && <MoviesSummary movies={ratedMovies} />}
            </>
          )}
        </MoviesBox>
      </main>
    </div>
  );
}
