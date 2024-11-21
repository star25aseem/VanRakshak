import React from 'react';
import './Card.css';

const Card = ({ title, imageSrc, description }) => {
  return (
    <div className="card">
      <img className="card-image" src={imageSrc} />
      <h2>{title}</h2>
      <br></br>
      <p>{description}</p>
    </div>
  );
}

export default Card;
