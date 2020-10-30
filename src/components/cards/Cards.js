import React from 'react';
import Card from './card/Card';
import './Cards.scss';
import { cards } from '../../tools/mockDB.json';

const Cards = () => {
  return (
    <div className="container">
      {cards.map(({ _id, title, body, image }) => (
        <Card key={_id} title={title} body={body} image={image}/>
      ))}
    </div>
  )
};

export default Cards;
