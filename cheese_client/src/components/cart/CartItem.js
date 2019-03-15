import React from 'react';

const CartItem = () => {
  return (
    <div className="card z-depth-0 item-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">Item Title</span>
        <p>Some Cheese Description</p>
        <p>Quantity</p>
        <button className="btn pink lighten-1 z-depth-0">+</button>Add or Subtract<button className="btn pink lighten-1 z-depth-0">-</button>

      </div>
    </div>
  )
}

export default CartItem;