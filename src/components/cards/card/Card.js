import React from 'react';
import PropTypes from "prop-types";
import './Card.scss';

const Card = ({ title, image }) => {
  return (
    <img className="image" src={`src/assets/images/${image}`} alt={title}/>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default Card;