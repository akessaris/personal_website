import React from 'react';
import PropTypes from "prop-types";
import './Card.scss';

const Card = ({ title, body, image }) => {
  return (
    <div className="card-container">
      <div className="card">
        <img className="image" src={`src/assets/images/${image}`}/>
        {/* TODO: replace with actual icons */}
        <div className="icon-container">
          <img className="icon-arrow left" src="src/assets/icons/left-arrow.svg"/>
          <img className="icon-arrow" src="src/assets/icons/right-arrow.svg"/>
        </div>
      </div>

      <div className="text">
        <h2>{title}</h2>
        <p>{body}</p>
        <div className="icon-container">
          <img className="icon-arrow left" src="src/assets/icons/left-arrow.svg"/>
          <img className="icon-arrow" src="src/assets/icons/right-arrow.svg"/>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default Card;