import React from "react";
import ButtonRemove from "../../Components/ButtonRemove";
import ButtonAdd from "../../Components/ButtonAdd";

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

    let price = reduced.map(item => item.price * item.quantity);

    if (selected.length > 0)
      return (
        <div className="cart">
          <table>
            <thead>
              {/* <tr> */}
              <th>products</th>
              <th>quantity</th>
              <th>price</th>
              <th>add</th>
              <th>remove</th>
              {/* </tr> */}
            </thead>
            {reduced.map(item => (
              <tr className="tableRow">
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{Number(item.price * item.quantity).toFixed(2)} EUR</td>
                <ButtonAdd
                  item={item}
                  addItem={this.props.addItem}
                  selected={this.props.selected}
                  name="+"
                />
                <ButtonRemove
                  item={item}
                  removeItem={this.props.removeItem}
                  name="-"
                />
                <div className="button">{this.props.children}</div>
              </tr>
            ))}
          </table>
        </div>
      );
    else return <h4> Your cart is empty</h4>;
  };

  render() {
    return <div> {this.renderCart()} </div>;
  }
}

export default Cart;
