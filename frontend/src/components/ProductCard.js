import React from 'react';
import PropTypes from 'prop-types';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const { photo, description, price, website } = product;

  return (
    <article data-testid='product-card' class='product-card'>
      <div className='div-img'>
        <img className='img-products' src={photo} alt='product' />        
      </div>

      <h2 className='description'>{description}</h2>
      <div className='price-button'>
        <h3 className='price'>R$ {price}</h3>
        <button
        className='card-button'
        onClick={() => window.location.href = website}>Ir ao Website</button>
      </div>
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

