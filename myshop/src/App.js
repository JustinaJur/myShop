import React, { Component } from 'react';
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
import Navigation from './Navigation'
//import AddButton from './Listing/ButtonAdd'




class App extends Component {
  state = {
    search: '',
    selected: [],
    hereSelected: []

  }


  //get value from input in SEARCHBAR component
  handleChangeValue = e => {
    console.log(e.target.value);
    this.setState({
      search: e.target.value.toLowerCase(),
    })
  }

  //add item to selected, kuri pasiima cart
  addItem = newSelection => {
    console.log(newSelection);
    this.setState({
      selected: [...this.state.selected, newSelection],
      hereSelected: [...this.state.hereSelected, newSelection]
    });
  }

  removeItem = (e) => {
    console.log(this.state.selected)
    let selected = this.state.selected;
    let array = [...selected];
    //find out if object is in array
    let found = array.find(el => el.name === e.name);
    if (found) {
      //find index of object
      let index = array.findIndex(el => el.name == e.name);
      //remove object from array
      array.splice(index, 1)
      //setina state tik local lygmeniu,updatina tik tam kartui, bet ne bendrai
      this.setState((prevState, props) => ({
        selected: array,
        //selectedAll: []
        //itemsInCart: selected.length - 1
      }))
    }
    console.log(this.state.selected)
  }





  render() {
    let selected = this.state.selected;

    return (
      <div>
        < BrowserRouter >
          <div>
            <Header
            />
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
              <Route path="/Cart" render={props =>
                <Cart
                  // siunciu i cart 
                  selected={this.state.selected}
                  //siunciu i cart
                  search={this.state.search}
                  hereSelected={this.state.hereSelected}
                  newSelection={this.props.newSelection}


                  removeItem={this.removeItem}
                  addItem={this.addItem}

                  {...props} />}
              />

              <Route exact path="/" render={props =>
                <Item
                  //gaunu is button paspausta item
                  addItem={this.addItem}
                  removeItem={this.removeItem}

                  //siunciu i item to filter items
                  search={this.state.search}
                  //siunciu i button neaisku kam 
                  selected={this.state.selected}

                  {...props} />}
              />




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
