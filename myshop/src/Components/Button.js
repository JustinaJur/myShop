import React from "react";

class Button extends React.Component {
  renderNumberOfItems = () => {
    const { selected, item } = this.props;

    const numberOfItems =
      selected && selected.filter(product => product.name === item.name).length;
    const finalNumberOfItems = numberOfItems > 0 ? numberOfItems : 0;

    return finalNumberOfItems;
  };

  render() {
    const { item, name, color } = this.props;

    return (
      <button
        style={{ backgroundColor: color }}
        onClick={() => {
          this.props.handleSelection(item);
        }}
      >
        {name} {name === "Add Item" && `(${this.renderNumberOfItems()})`}
      </button>
    );
  }
}

export default Button;
