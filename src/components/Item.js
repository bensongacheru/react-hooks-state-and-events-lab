// src/components/Item.js
import React, { useState } from 'react';

const Item = ({ name, category }) => {
  // State variable for cart status
  const [isInCart, setIsInCart] = useState(false);

  // Toggle function
  const toggleCartStatus = () => {
    setIsInCart(!isInCart);
  };

  return (
    <li className={isInCart ? 'in-cart' : ''}>
      {name} - {category}
      <button onClick={toggleCartStatus}>
        {isInCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
};

export default Item;

