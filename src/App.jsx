import React, { useState, useEffect } from 'react';
import { getAllStarships } from './services/starshipService';
import StarshipSearch from './components/StarshipSearch';
import StarshipList from './components/StarshipList';
import './app.css'; 

function App() {
  const [starships, setStarships] = useState([]);
  const [filteredStarships, setFilteredStarships] = useState([]);

  useEffect(() => {
    async function fetchStarships() {
      try {
        const starshipData = await getAllStarships();
        setStarships(starshipData);
        setFilteredStarships(starshipData);
      } catch (err) {
        console.error(err);
      }
    }
    fetchStarships();
  }, []);

  function handleSearch(query) {
    const filtered = starships.filter(ship => 
      ship.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredStarships(filtered);
  }

  return (
    <main>
      <StarshipSearch onSearch={handleSearch} />
      <StarshipList starships={filteredStarships} />
    </main>
  );
}

export default App;
