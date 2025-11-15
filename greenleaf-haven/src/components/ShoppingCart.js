import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
  addItemToCart, 
  removeItemFromCart, 
  deleteItemFromCart 
} from '../redux/cartSlice';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);

  const handleIncrease = (item) => {
    dispatch(addItemToCart(item));
  };

  const handleDecrease = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteItemFromCart(id));
  };

  const handleCheckout = () => {
    alert('Coming Soon! Checkout functionality will be implemented in the next version.');
  };

  if (items.length === 0) {
    return (
      <div className="shopping-cart">
        <div className="container">
          <h1>Shopping Cart</h1>
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <Link to="/products" className="continue-shopping-btn">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="shopping-cart">
      <div className="container">
        <h1>Shopping Cart</h1>
        
        <div className="cart-summary">
          <p>Total Items: {totalQuantity}</p>
          <p className="total-cost">Total Cost: ${totalAmount.toFixed(2)}</p>
        </div>

        <div className="cart-items">
          {items.map(item => (
            <div key={item.id} className="cart-item">
              <div className="item-image">{item.image}</div>
              
              <div className="item-details">
                <h3>{item.name}</h3>
                <p className="unit-price">Unit Price: ${item.price}</p>
              </div>

              <div className="quantity-controls">
                <button 
                  className="quantity-btn"
                  onClick={() => handleDecrease(item.id)}
                >
                  -
                </button>
                <span className="quantity">{item.quantity}</span>
                <button 
                  className="quantity-btn"
                  onClick={() => handleIncrease(item)}
                >
                  +
                </button>
              </div>

              <div className="item-total">
                ${item.totalPrice.toFixed(2)}
              </div>

              <button 
                className="delete-btn"
                onClick={() => handleDelete(item.id)}
              >
                🗑️
              </button>
            </div>
          ))}
        </div>

        <div className="cart-actions">
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
          <Link to="/products" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;