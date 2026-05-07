import { useState } from 'react';
import styles from './Search.module.css';

export default function Search({ placeholder, onSearch }) {
  const [searchValue, setSearchValue] = useState('');

  function handleSearch(e) {
    const {
      target: { value },
    } = e;

    setSearchValue(value);

    if (value.length >= 3) {
      onSearch(value);
    } else {
      onSearch('');
    }
  }

  return (
    <input
      value={searchValue}
      onChange={handleSearch}
      className={styles.search}
      type='search'
      placeholder={placeholder}
    />
  );
}
