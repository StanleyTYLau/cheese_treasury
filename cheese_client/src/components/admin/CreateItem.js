import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createItem } from '../../store/actions/itemActions';
import { Redirect } from 'react-router-dom'

class CreateItem extends Component {
  state = {
    title: '',
    description: '',
    inventory: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);
    this.props.createItem(this.state)
  }

  render() {
    if (!this.props.auth.uid) return <Redirect to='/register' />

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create New Item</h5>

          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="description">Description</label>
            <textarea id="description" className="materialize-textarea" onChange={this.handleChange}></textarea>
          </div>
          <div className="input-field">
            <label htmlFor="inventory">Inventory</label>
            <input type="number" id="inventory" onChange={this.handleChange}/>
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createItem: (item) => dispatch(createItem(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateItem);