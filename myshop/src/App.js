import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./index.css";
import Header from "./Containers/Home/Header";
import SearchBar from "./SearchBar";
import Navigation from "./Containers/Navigation";
import Cart from "./Containers/Cart/Cart";
import Contacts from "./Containers/Cart/Contacts";
import Error from "./Containers/Error";
import Item from "./Containers/Cart/Item";

class App extends Component {
  state = {
    search: "",
    selected: []
  };

  handleChangeValue = e => {
    this.setState({
      search: e.target.value.toLowerCase()
    });
  };

  addItem = newSelection => {
    this.setState((prevState, props) => ({
      selected: [...this.state.selected, newSelection]
    }));
  };

  removeItem = e => {
    let selected = this.state.selected;
    let array = [...selected];
    let found = array.find(el => el.name === e.name);
    if (found) {
      let index = array.findIndex(el => el.name === e.name);
      array.splice(index, 1);
      this.setState((prevState, props) => ({
        selected: array
      }));
    }
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <SearchBar handleChangeValue={this.handleChangeValue} />
          <Navigation />
          <Switch>
            <Route
              path="/Cart"
              render={props => (
                <Cart
                  search={this.state.search}
                  selected={this.state.selected}
                  addItem={this.addItem}
                  removeItem={this.removeItem}
                  {...props}
                />
              )}
            />

            <Route
              exact
              path="/"
              render={props => (
                <Item
                  search={this.state.search}
                  selected={this.state.selected}
                  addItem={this.addItem}
                  removeItem={this.removeItem}
                  {...props}
                />
              )}
            />
            <Route path="/Contacts" component={Contacts} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
