import React, { Component } from 'react';

// import './App.css';
import './index.css';
import ProductsList from './ProductsList'
import duomenys from './products.json'
import Header from './Header'
import SearchBar from './SearchBar'
import Item from './Item'


class App extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
      search: '',
      duomenys: duomenys
    }
  }


  //get value from input in SEARCHBAR component
  handleChangeValue = e => {
    this.setState({
      search: e.target.value.toLowerCase(),
    })
  }


  render() {

    // let search = this.state.search;
    let duomenys = this.state.duomenys;


    return (
      <div>
        <Header />
        <SearchBar
          // value={this.state.value}
          //passing data from child to parent
          parodykkaivedei={this.handleChangeValue}
        />
        {/* <ProductsList products={duomenys.products} /> */}
        {/* <p className="products-container">{filteredData}</p> */}

        <Item className="products-container"
          search={this.state.search}
          duomenys={duomenys}
        // funkcija={this.state.funkcija}
        />

      </div >
    );
  }
}

export default App;
