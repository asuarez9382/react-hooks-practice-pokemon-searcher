import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokeList, setPokeList] = useState([])

  useEffect(()=> {
    fetch("http://localhost:3001/pokemon")
      .then(res => res.json())
      .then(pokeData => setPokeList(pokeData))
  }, [])

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm
        pokeList={pokeList}
        setPokeList={setPokeList}
      />
      <br />
      <Search 
        pokeList={pokeList}
        setPokeList={setPokeList}
      />
      <br />
      <PokemonCollection 
        pokeList={pokeList}
        setPokeList={setPokeList}
      />
    </Container>
  );
}

export default PokemonPage;
