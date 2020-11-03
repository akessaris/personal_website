import React, { useState } from 'react';
import Card from './card/Card';
import './Cards.scss';
import { cards } from '../../tools/mockDB.json';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ClearIcon from '@material-ui/icons/Clear';
import { SvgIcon } from '@material-ui/core';

const Cards = () => {
  const [cardIndex, setCardIndex] = useState(0);

  const { _id, title, image } = cards[cardIndex];

  return (
    <div className="container">
      <div className="card-column">
        <div className="card">
          <Card
            key={_id}
            title={title}
            image={image}
          />
          <p className="subheader"><span className="name">Alex Kessaris</span>, <span className="age">24</span></p>
          </div>

          <div className="icon-container">
            <SvgIcon class="icon clear"><ClearIcon/></SvgIcon>
            <SvgIcon class="icon heart"><FavoriteIcon/></SvgIcon>
          </div>
      </div>

      <div className="text">
        <h1>Hello there</h1>
        <p>
          Testing testing 123
        </p>
      </div>
    </div>
  )
};

export default Cards;
