import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./index.css";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar/SearchBar";
import Navigation from "./Components/Navigation";
import Cart from "./Containers/Cart/Cart";
import Contacts from "./Containers/Contacts";
import Error from "./Containers/Error";
import ItemsList from "./Containers/Home/ItemsList";

class App extends Component {
  state = {
    searchedItem: "",
    selectedItems: []
  };

  handleChangeValue = e => {
    this.setState({
      searchedItem: e.target.value.toLowerCase()
    });
  };

  addItem = newItem => {
    const { selectedItems } = this.state;

    this.setState((prevState, props) => ({
      selectedItems: [...selectedItems, newItem]
    }));
  };

  removeItem = e => {
    const { selectedItems } = this.state;

    let array = [...selectedItems];
    let found = array.find(el => el.name === e.name);
    if (found) {
      let index = array.findIndex(el => el.name === e.name);
      array.splice(index, 1);
      this.setState((prevState, props) => ({
        selectedItems: array
      }));
    }
  };

  render() {
    const { selectedItems, searchedItem } = this.state;

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
                  searchedItem={searchedItem}
                  selectedItems={selectedItems}
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
                <ItemsList
                  searchedItem={searchedItem}
                  selectedItems={selectedItems}
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
