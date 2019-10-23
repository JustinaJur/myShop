import React from "react";

import data from "../../products.json";
import Button from "../../Components/Button/Button";

class Item extends React.Component {
  renderNumberOfItems = item => {
    const { selected } = this.props;

    const numberOfItems =
      selected && selected.filter(product => product.name === item.name).length;
    const finalNumberOfItems = numberOfItems > 0 ? numberOfItems : 0;

    return finalNumberOfItems;
  };

  renderItems = () => {
    const { search, addItem, selected, removeItem } = this.props;

    let filteredData = data.products.filter(
      item =>
        item.name.toLowerCase().indexOf(search) !== -1 ||
        item.description.toLowerCase().indexOf(search) !== -1
    );

    return (
      <div className="products-container">
        {filteredData.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <img height={100} src={`/products/${item.image}`} alt="item" />
            {item.description}
            <h3>{item.price} EUR</h3>
            <div className="buttons">
              <Button
                item={item}
                handleSelection={addItem}
                selected={selected}
                name="Add Item"
                color="greenyellow"
                numberOfItems={this.renderNumberOfItems(item)}
              />
              <Button
                item={item}
                handleSelection={removeItem}
                name="Remove Item"
                color="tomato"
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

  render() {
    return this.renderItems();
  }
}

export default Item;
