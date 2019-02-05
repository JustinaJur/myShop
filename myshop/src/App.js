import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
//import Router from './Router'

import { BrowserRouter, Route, Switch } from 'react-router-dom';


// import './App.css';
import './index.css';
import ItemContainer from './Listing/ItemContainer'
import Header from './Header'
import SearchBar from './SearchBar'
import Item from './Listing/Item'


import Cart from "./Listing/Cart";
import Contacts from "./Listing/Contacts";
import Error from "./Listing/Error";
import Button from "./Listing/Button";



//instaed of creating separate component
const Navigation = (props) => <nav>
  <ul className="nav">

    <li><NavLink to="/"> products </NavLink></li>
    <li><NavLink to="/Cart"> Cart </NavLink> </li>
    <li><NavLink to="/Contacts"> Contacts </NavLink> </li>
  </ul>
</nav>

class App extends Component {
  state = {
    search: '',
    selected: [],
  }



  //get value from input in SEARCHBAR component
  handleChangeValue = e => {
    console.log(e.target.value);
    this.setState({
      search: e.target.value.toLowerCase(),
    })
  }

  handler = newSelection => {
    console.log(newSelection.name);
    let selected = this.state.selected;
    this.setState({
      selected: [...selected, newSelection.name]
    });
  }


  render() {
    let selected = this.state.selected;

    return (
      <div>
        < BrowserRouter >
          <div>

            <Header />
            <SearchBar
              //app gets the input value from searchbar
              handleChangeValue={this.handleChangeValue}
            // value={this.state.value}
            />
            <Navigation />
            {/* <ItemContainer
              search={this.state.search}
            /> */}

            <Switch>
              {/* <Route path="/" component={Item} search={this.state.search} exact /> */}

              <Route exact path="/" render={props => <Item handler={this.handler} search={this.state.search} {...props} />} />


              <Route path="/Cart" render={props => <Cart selected={this.state.selected} {...props} />} />

              {/* <Route path="/Cart" component={Cart} selected={this.state.selected} /> */}


              <Route path="/Contacts" component={Contacts} />
              <Route component={Error} />

            </Switch>
          </div>
        </BrowserRouter >
      </div >
    );
  }
}

export default App;
