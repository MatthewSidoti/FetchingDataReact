import React, { useState } from 'react';

function StarshipSearch({ onSearch }) {
  const [query, setQuery] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(query);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Search Starships..." 
        value={query}
        onChange={(e) => setQuery(e.target.value)} 
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default StarshipSearch;
