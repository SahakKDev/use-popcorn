import { useEffect, useState } from 'react';

const API_KEY = import.meta.env.VITE_API_KEY;
let timerId;

export default function useFetch(term) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    async function getItems() {
      if (term.length < 3) {
        setError(null);
        setItems([]);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&s=${term}`,
          { signal },
        );

        const json = await response.json();

        if (json.Response !== 'True') {
          setError(true);
          setLoading(false);
          setItems([]);
          return;
        }

        setItems(json.Search);
      } catch {
        if (!signal?.aborted) {
          setError(true);
          setLoading(false);
          return;
        }
      }

      setError(null);
      setLoading(false);
    }

    clearTimeout(timerId);
    timerId = setTimeout(() => {
      getItems();
    }, 250);

    return () => {
      abortController.abort();
    };
  }, [term]);

  return { movies: items, loading, error };
}
