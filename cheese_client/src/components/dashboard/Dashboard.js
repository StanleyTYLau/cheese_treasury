import React, { Component } from 'react';
import ItemList from '../item/ItemList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
  render() {
    //console.log(this.props);
    const {items, auth} = this.props;
    if (!auth.uid) return <Redirect to='/register' />

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ItemList items={items}/>
          </div>

        </div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  
  return {
    items: state.firestore.ordered.items,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'items' }
  ])
)(Dashboard);