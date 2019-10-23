import React from "react";

class ButtonAdd extends React.Component {
  render() {
    const { selected, item, name } = this.props;

    let filteredSelected = selected.filter(
      product => product.name === item.name
    );

    let numberOfItems = filteredSelected.length;

    return (
      <div>
        <button
          style={{ backgroundColor: "greenyellow" }}
          onClick={() => {
            this.props.addItem(this.props.item);
          }}
        >
          {name}({numberOfItems})
        </button>
      </div>
    );
  }
}

export default ButtonAdd;
