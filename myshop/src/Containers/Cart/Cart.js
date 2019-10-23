import React from "react";

import Button from "../../Components/Button";

class Cart extends React.Component {
  renderCart = () => {
    const { selected } = this.props;

    let reduced = selected
      .reduce((acc, item) => {
        let filteredItem = acc.filter(item2 => item2.id === item.id)[0];

        if (filteredItem !== undefined) {
          filteredItem.quantity++;
        } else {
          acc.push({ ...item, quantity: 1 });
        }
        return acc;
      }, [])
      .filter(
        item => item.name.toLowerCase().indexOf(this.props.search) !== -1
      );

    if (selected.length > 0)
      return (
        <div className="cart">
          <table>
            <thead>
              <th>products</th>
              <th>quantity</th>
              <th>price</th>
              <th>add</th>
              <th>remove</th>
            </thead>
            {reduced.map(item => (
              <tr className="tableRow">
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{Number(item.price * item.quantity).toFixed(2)} EUR</td>
                <Button
                  item={item}
                  handleSelection={this.props.addItem}
                  selected={this.props.selected}
                  name="+"
                  color="greenyellow"
                />
                <Button
                  item={item}
                  handleSelection={this.props.removeItem}
                  name="-"
                  color="tomato"
                />
              </tr>
            ))}
          </table>
        </div>
      );
    else return <h4>Your cart is empty</h4>;
  };

  render() {
    return this.renderCart();
  }
}

export default Cart;
