import Header from './components/Header/Header';
import MoviesBox from './components/MoviesBox';

import styles from './App.module.css';
import { useState } from 'react';
import useFetch from './hooks/useFetch';
import MoviesList from './components/MoviesList/MoviesList';

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

  function updateSearchTerm(movies) {
    setSearchTerm(movies);
  }

  return (
    <div className={styles.root}>
      <Header onSearch={updateSearchTerm} resultsCount={movies.length} />
      <main className={styles.main}>
        <MoviesBox>
          <MoviesList movies={movies} error={error} loading={loading} />
        </MoviesBox>
        <MoviesBox />
      </main>
    </div>
  );
}
