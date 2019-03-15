import React, { Component } from 'react';
import ItemList from '../item/ItemList';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ItemList />
          </div>

        </div>
        
      </div>
    )
  }
}

export default Dashboard;