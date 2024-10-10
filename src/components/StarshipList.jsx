import React from 'react';
import StarshipCard from './StarshipCard';

function StarshipList({ starships }) {
  return (
    <section>
      <h2>{`Displaying ${starships.length} starships`}</h2>
      <ul>
        {starships.map(starship => (
          <StarshipCard key={starship.name} starship={starship} />
        ))}
      </ul>
    </section>
  );
}

export default StarshipList;
