import React from "react";

import data from "../../products.json";
import Button from "../../Components/Button/Button";

class ItemsList extends React.Component {
  renderNumberOfItems = item => {
    const { selectedItems } = this.props;

    const numberOfItems =
      selectedItems &&
      selectedItems.filter(product => product.name === item.name).length;
    const finalNumberOfItems = numberOfItems > 0 ? numberOfItems : 0;

    return finalNumberOfItems;
  };

  renderItems = () => {
    const { searchedItem, addItem, selectedItems, removeItem } = this.props;

    let filteredData = data.products.filter(
      item =>
        item.name.toLowerCase().indexOf(searchedItem) !== -1 ||
        item.description.toLowerCase().indexOf(searchedItem) !== -1
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
                selectedItems={selectedItems}
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

export default ItemsList;
