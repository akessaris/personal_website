import React, { useState } from 'react';
import Card from './card/Card';
import './Cards.scss';
import { cards } from '../../tools/mockDB.json';

const Cards = () => {
  const [card, setCard] = useState(cards[0]);

  const { _id, title, body, image } = card;

  return (
    <div className="container">
      <Card key={_id} title={title} body={body} image={image}/>
    </div>
  )
};

export default Cards;
