import React from 'react';

const ProductCard = ({ product, onAddToCart, isAdded }) => {
  return (
    <div className="product-card">
      <div className="product-image">{product.image}</div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          <button
            className={`add-to-cart-btn ${isAdded ? 'added' : ''}`}
            onClick={() => onAddToCart(product)}
            disabled={isAdded}
          >
            {isAdded ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;