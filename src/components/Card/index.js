import React from 'react';
import './Card.scss';

const Card = ( props ) => {
  const { name, imageUrl, text, type, set, rarity } = props;
    const setName = set.name;

    return (
      <div className={`card ${rarity}`}>
        <div className="card-image"><img src={imageUrl} alt={name} /></div>
        <div className="card-info">
        <div className="card-name">{name}</div>
          <p>Type: {type}</p>
          <p>Set: {setName}</p>
          <p>{text}</p>
        </div>
      </div>
    );
}

export default Card;
/*
Example card data
  {
    "name":"Raise Dead",
    "rarity":"Legendary",
    "type":"Action",
    "cost":2,
    "set":{
      "id":"cs",
      "name":"Core Set",
      "_self":"https://api.elderscrollslegends.io/v1/sets/cs"
    },
    "collectible":false,
    "text":"Summon a random creature from each discard pile.",
    "attributes":["Endurance"],
    "unique":false,
    "imageUrl":"https://images.elderscrollslegends.io/cs/raise_dead.png",
    "id":"ce7be2e72d6b06a52e50bed01952801ca4ecfade"
  }
*/
