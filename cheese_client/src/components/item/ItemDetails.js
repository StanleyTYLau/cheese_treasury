import React from 'react';

const ItemDetails = (props) => {
  const id = props.match.params.id;

  return (
    <div className="container section item-details">
      <div className="card z-depth-0">

        <div className="card-content">
          <span className="card-title">Item Title - {id}</span>
          <p>Item Description</p>
        </div>

        <div className="card-action grey lighten-5 grey-text">
          <div>Footer</div>
        </div>

      </div>
    </div>
  )
}

export default ItemDetails;