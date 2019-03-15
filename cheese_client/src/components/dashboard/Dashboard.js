import React, { Component } from 'react';
import ItemList from '../item/ItemList';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    //console.log(this.props);
    const {items} = this.props;

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
    items: state.item.items
  }
}

export default connect(mapStateToProps)(Dashboard);