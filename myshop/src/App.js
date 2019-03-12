import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Navigation from "./Navigation";
import Cart from "./Listing/Cart";
import Contacts from "./Listing/Contacts";
import Error from "./Listing/Error";
import Item from "./Listing/Item";


class App extends Component {
  state = {
    search: '',
    selected: []
  }



  // get value from input in SEARCHBAR 
  handleChangeValue = e => {
    this.setState({
      search: e.target.value.toLowerCase(),
    })
  }

  // add item to selected
  addItem = newSelection => {
    this.setState((prevState, props) => ({
      selected: [...this.state.selected, newSelection]
    }))
  }

  // remove item from selected
  removeItem = (e) => {
    let selected = this.state.selected;
    let array = [...selected];
    // find out if object is in array
    let found = array.find(el => el.name === e.name);
    if (found) {
      // find index of object
      let index = array.findIndex(el => el.name == e.name);
      // remove object from array
      array.splice(index, 1)
      this.setState((prevState, props) => ({
        selected: array
      }))
    }
  }


  render() {
    return (
      <div>
        < BrowserRouter >
          <div>
            <Header
            />
            <SearchBar
              handleChangeValue={this.handleChangeValue}
            />
            <Navigation />
            <Switch>
              <Route path="/Cart" render={props =>
                <Cart
                  search={this.state.search}
                  selected={this.state.selected}
                  addItem={this.addItem}
                  removeItem={this.removeItem}

                  {...props} />}
              />

              <Route exact path="/" render={props =>
                <Item
                  search={this.state.search}
                  selected={this.state.selected}
                  addItem={this.addItem}
                  removeItem={this.removeItem}

                  {...props} />}
              />
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
