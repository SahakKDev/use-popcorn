import { useState } from 'react';
import styles from './App.module.css';
import useFetch from './hooks/useFetch';
import { API_KEY } from './constants';

import Header from './components/Header/Header';
import MoviesBox from './components/MoviesBox';
import MoviesList from './components/MoviesList/MoviesList';
import MovieDetails from './components/MovieDetails/MovieDetails';
import MoviesSummary from './components/MoviesSummary/MoviesSummary';

const dummy_movies = [
  {
    Title: 'Inter Star Wars 2: The Last Jehi',
    Year: '2017',
    imdbID: 'tt7640228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGQyMWQ0ZjItMGMyOC00Y2RlLWIzZDQtZjhmZTdiNDdhOTdmXkEyXkFqcGc@._V1_SX300.jpg',
  },
  {
    Title: 'Parallel Space: Inter-View',
    Year: '1992',
    imdbID: 'tt0105095',
    Type: 'movie',
    Poster: 'N/A',
  },
  {
    Title: 'National Theatre Live: Inter Alia',
    Year: '2025',
    imdbID: 'tt36364878',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTVlNGY4ZjYtNjZhZS00ZDM2LTlhMGUtMzllY2Q4MDA3MDRiXkEyXkFqcGc@._V1_SX300.jpg',
  },
  {
    Title: 'Inter-View',
    Year: '1999',
    imdbID: 'tt0228433',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BM2YyYWIzOWEtZDQwNS00ZmY3LWI3ZjgtYTQzNWEzM2I3ZjM3XkEyXkFqcGc@._V1_SX300.jpg',
  },
  {
    Title: 'Inter Nos',
    Year: '1982',
    imdbID: 'tt0260100',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZjY4YTJmNDQtZmFjNS00ZTJmLWJkZTctN2U2N2YyNTg2NGQ1XkEyXkFqcGc@._V1_SX300.jpg',
  },
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const { movies, loading, error } = useFetch(searchTerm);

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedMovieError, setSelectedMovieError] = useState(null);
  const [selectedMovieLoading, setSelectedMovieLoading] = useState(false);

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

  return (
    <div className={styles.root}>
      <Header onSearch={updateSearchTerm} resultsCount={movies.length} />
      <main className={styles.main}>
        <MoviesBox error={error} loading={loading}>
          <MoviesList movies={movies} onSelect={handleSelectMovie} />
        </MoviesBox>
        <MoviesBox error={selectedMovieError} loading={selectedMovieLoading}>
          {selectedMovie && <MovieDetails movie={selectedMovie} />}
          {!selectedMovie && <MoviesSummary />}
        </MoviesBox>
      </main>

      {/* <StarRate size={50} color='#FFD700' quantity={5} /> */}
    </div>
  );
}
