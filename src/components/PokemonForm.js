import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ pokeList, setPokeList }) {

  const [newPokemon, setNewPokemon] = useState({
    "name": "",
    "hp": "",
    "sprites":{
      "front":"",
      "back": ""
    }
  })


  function handleChange(e) {
    const {name, value} = e.target
    console.log(newPokemon)

    setNewPokemon(prevPokemon => {
      if (name === "front" || name === "back") {
        
        return {
          ...prevPokemon,
          sprites: {
            ...prevPokemon.sprites,
            [name]: value
          }
        };
      } else {
      
        return {
          ...prevPokemon,
          [name]: value
        };
      }
    });
  
    
    
  }

  function handleSubmit(e) {
    e.preventDefault()

    fetch("http://localhost:3001/pokemon", {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": JSON.stringify(newPokemon)
    })
      .then(res => res.json())
      .then(data => setPokeList([...pokeList,newPokemon]))

    

  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid label="Name" 
            placeholder="Name" 
            name="name" 
            value={newPokemon.name}
            onChange={handleChange}
          />
          <Form.Input 
            fluid label="hp" 
            placeholder="hp" 
            name="hp"
            value={newPokemon.hp}
            onChange={handleChange} 
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
            value={newPokemon.sprites.front}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
            value={newPokemon.sprites.back}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
