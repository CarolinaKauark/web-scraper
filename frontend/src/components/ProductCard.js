import React from 'react';
import PropTypes from 'prop-types';

export default function ProductCard({ product }) {
  const { photo, description, category, price, website } = product;

  return (
    <article data-testid='product-card' >
      <div>
        <img src={photo} alt='product' />        
      </div>

      <h2>{category}</h2>
      <p>{description}</p>
      <span>{price}</span>
      <button onClick={() => window.location.href = website}>Ir ao Website</button>
    </article>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    photo: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.string,
    website: PropTypes.string,
  }).isRequired,
}

