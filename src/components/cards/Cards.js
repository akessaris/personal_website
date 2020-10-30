import React, { useState } from 'react';
import Card from './card/Card';
import './Cards.scss';
import { cards } from '../../tools/mockDB.json';

const Cards = () => {
  const [cardIndex, setCardIndex] = useState(0);

  const { _id, title, body, image } = cards[cardIndex];

  const handleChange = (direction) => {
    setCardIndex(prevIndex => {
      const updatedIndex = direction === 'left' ? (prevIndex - 1) : (prevIndex + 1);
      return (updatedIndex >= 0) ? updatedIndex : prevIndex;
    });
  };

  return (
    <div className="container">
      <Card
        key={_id}
        title={title}
        body={body}
        image={image}
        onArrowClick={handleChange}
      />
    </div>
  )
};

export default Cards;
