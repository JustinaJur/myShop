import React from "react";

class Button extends React.Component {
  render() {
    const { item, name, color, numberOfItems } = this.props;

    return (
      <button
        style={{ backgroundColor: color }}
        onClick={() => {
          this.props.handleSelection(item);
        }}
      >
        {name}
        {numberOfItems ? ` (${numberOfItems})` : ""}
      </button>
    );
  }
}

export default Button;
