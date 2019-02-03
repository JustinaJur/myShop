import React, { Component } from 'react';

// import './App.css';
import './index.css';
import ProductsList from './ProductsList'

import Header from './Header'
import SearchBar from './SearchBar'
import Item from './Item'


class App extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
      search: '',
      selected: "arbuzas"

    }
  }


  //get value from input in SEARCHBAR component
  handleChangeValue = e => {
    this.setState({
      search: e.target.value.toLowerCase(),
    })
  }

  addToCart = (e) => {
    let selected = this.state.selected;
    this.setState({
      selected: [...selected, ", " + e]
    })
  }


  render() {
    // let search = this.state.search;
    let duomenys = this.state.duomenys;

    return (
      <div>

        <Header />
        <p className="sticky"> {this.state.selected}</p>
        <SearchBar
          // value={this.state.value}
          //passing data from child to parent
          parodykkaivedei={this.handleChangeValue}
        />
        <ProductsList
          search={this.state.search}
          parodykprekes={this.parodykprekes}
          duomenys={duomenys}
          addToCart={this.addToCart}

        />
        {/* <p className="products-container">{filteredData}</p> */}

        {/* <Item className="products-container"
          search={this.state.search}
          duomenys={duomenys} */}


      </div >
    );
  }
}

export default App;
