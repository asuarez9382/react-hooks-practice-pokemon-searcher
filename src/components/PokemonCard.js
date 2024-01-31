import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ name, hp, images }) {

  const [isClicked, setIsClicked] = useState(false)

  function handleClick(){
    if(isClicked){
      setIsClicked(!isClicked)
    }
    else{
      setIsClicked(true)
    }
  }

  return (
    <Card>
      <div>
        <div className="image">
          <img src={ isClicked ? images.back : images.front} alt={name} onClick={handleClick} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
