import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ItemDetails from './components/item/ItemDetails';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import CreateItem from './components/admin/CreateItem';
import Cart from './components/cart/Cart';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/item/:id' component={ItemDetails}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/admin/create' component={CreateItem} />
          </Switch>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
