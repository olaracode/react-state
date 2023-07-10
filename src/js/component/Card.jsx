import React from "react";
import PropTypes from "prop-types";

function Card({ src, title, content, price }) {
  return (
    <div className="card w-100">
      <img src={src} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <a href="#" className="btn btn-primary">
          Comprar {price}$
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  price: PropTypes.number,
};

export default Card;
