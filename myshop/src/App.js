import React, { Component } from 'react';

// import './App.css';
import './index.css';
import ProductsList from './ProductsList'
import duomenys from './products.json'
import Header from './Header'
import SearchBar from './SearchBar'


class App extends Component {
  state = {
    products: [],
    value: '',
    found: ''
  }

  // [duomenys.products.map(product =>
  //   <div>
  //     {product.name}
  //     <img
  //       height={100}
  //       src={`/products/${product.image}`}
  //       title={product.name}
  //     />
  //     {product.description}
  //     ${product.price}
  //     <button style={{ width: "100px" }}
  //     > add to cart </button>
  //   </div>

  // )]


  // updatedList = duomenys.products.filter(function (item) {
  //   return item.search(event.target.value) !== -1;
  // });

  handleChangeValue = e => this.setState({
    //gaunam sita is input lauko
    value: e.target.value,

    found: [duomenys.products.filter((product) =>
      <div>
        {product.name === e.target.value}

      // product.search(event.target.value) !== -1;

      </div>
    )]
  })
  // findProducts = () => {
  //   const name = duomenys.products.map(product =>
  //     this.setState({ products: product.name }))

  // }



  render() {
    return (
      <div>
        <Header />
        <SearchBar
          // onSubmit={this.findProducts}
          value={this.state.value}
          parodykkaivedei={this.handleChangeValue}
        />



        <p> found items: {this.state.found}</p>



        <ProductsList products={duomenys.products} />

      </div >
    );
  }
}

export default App;
