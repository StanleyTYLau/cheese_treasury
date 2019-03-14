import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ItemDetails from './components/item/ItemDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/item/:id' component={ItemDetails}/>
          </Switch>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
