import React, { Component } from 'react';
import CartList from '../cart/CartList';

class Cart extends Component {
  render() {
    return (
      <div className="cart container">
        <h5 className="grey-text text-darken-3">Your Cart</h5>
        <div className="row">
          <div className="col s12 m6">
            <CartList />
          </div>
        </div>
        
      </div>
    )
  }
}

export default Cart;