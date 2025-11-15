import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/cartSlice';
import { selectAllProducts, selectCategories } from '../redux/productsSlice';
import ProductCard from './ProductCard';

const ProductListing = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const categories = useSelector(selectCategories);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [addedItems, setAddedItems] = useState(new Set());

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
    setAddedItems(prev => new Set(prev).add(product.id));
  };

  return (
    <div className="product-listing">
      <div className="container">
        <h1>Our Houseplants</h1>
        
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              isAdded={addedItems.has(product.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;