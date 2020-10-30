import React from 'react';
import PropTypes from "prop-types";
import './Card.scss';

const Card = ({ title, body, image }) => {
  return (
    <div className="card">
      <img className="image" src={`src/assets/${image}`} />
      {/* <h2>{title}</h2> */}
      {/* <p>{body}</p> */}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default Card;