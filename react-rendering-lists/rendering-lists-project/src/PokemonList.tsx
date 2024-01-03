// imports for react project
import React from 'react';

export const PokemonList = ({ pokedex }) => {
  return (
    <ul>
      {pokedex.map((poke) => (
        <li key={poke.number}>
          {poke.number}: {poke.name}
        </li>
      ))}
    </ul>
  );
};
