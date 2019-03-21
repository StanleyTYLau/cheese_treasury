import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const ItemDetails = (props) => {
  const {item} = props
  
  if (item) {
    return (
      <div className="container section item-details">
        <div className="card z-depth-0">

          <div className="card-content">
            <span className="card-title">{item.title}</span>
            <p>{item.description}</p>
            <p>Inventory: {item.inventory}</p>
          </div>

          <div className="card-action grey lighten-5 grey-text">
            <div>Footer</div>
          </div>

        </div>
      </div>
    )    
  }
  else {
    return (
      <div className='container'>
        <p>Loading Item...</p>
      </div>
    )
  }

  
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  const items = state.firestore.data.items //grabs all items data from firestore
  const item = items ? items[id] : null //grabs the specific item data
  return {
    item: item
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'items'}
  ])
)(ItemDetails)