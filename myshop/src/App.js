import React, { Component } from 'react';

// import './App.css';
import './index.css';
import ItemContainer from './Listing/ItemContainer'
import Header from './Header'
import SearchBar from './SearchBar'
// import Item from './Item'


class App extends Component {
  constructor() {
    super()
    this.state = {
      search: '',
    }
  }


  //get value from input in SEARCHBAR component
  handleChangeValue = e => {
    this.setState({
      search: e.target.value.toLowerCase(),
    })
  }


  render() {
    return (
      <div>
        <Header />
        <SearchBar
          //app gets the input value from searchbar
          handleChangeValue={this.handleChangeValue}
        // value={this.state.value}
        />
        <ItemContainer
          search={this.state.search}
        />

      </div >
    );
  }
}

export default App;
