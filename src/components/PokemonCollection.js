import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokeList, setPokeList }) {
  return (
    <Card.Group itemsPerRow={6}>
      {pokeList.map(pokemon => (
        <PokemonCard 
          key={pokemon.id}
          name={pokemon.name}
          hp={pokemon.hp}
          images={pokemon.sprites}
        />
      ))}
    </Card.Group>
  );
}

export default PokemonCollection;
