import React, { useState } from "react";

function Search({ pokeList, setPokeList }) {

  const [searchedPokemon, setSearchedPokemon] = useState("")


  function handleChange(e) {
    console.log(e.target.value)
    const searchValue = e.target.value.toLowerCase()

    setSearchedPokemon(searchValue)

    if(searchValue === ""){
      fetch("http://localhost:3001/pokemon")
      .then(res => res.json())
      .then(pokeData => setPokeList(pokeData))
    }
    else {
      const newPokeList = pokeList.filter(pokemon=>{
        return pokemon.name.toLowerCase().includes(searchValue)
        
      })
      setPokeList(newPokeList)
    }

  }


  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleChange} value={searchedPokemon} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
