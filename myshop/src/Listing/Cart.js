import React from 'react'
import Item from './Item'
import '../index.css';
import Button from './Button'
import ButtonRemove from './ButtonRemove'
import ButtonAdd from './ButtonAdd'

class Cart extends React.Component {

    ///updatina tik local state bet ne visam kaip ir su cart zaliu langeliu,reik idet bendra stae i juos
    // removeFromCart = (e) => {
    //     //console.log(this.state.selected)
    //     //console.log(e.name)
    //     let selected = this.state.selected;
    //     let array = [...selected];
    //     //find out if object is in array
    //     let found = array.find(el => el.name === e.name);
    //     if (found) {
    //         //find index of object
    //         let index = array.findIndex(el => el.name == e.name);
    //         //remove object from array
    //         array.splice(index, 1)

    //         //setina state tik local lygmeniu,updatina tik tam kartui, bet ne bendrai
    //         this.setState((prevState, props) => ({
    //             selected: array,
    //             selectedAll: []
    //             //itemsInCart: selected.length - 1
    //         }))
    //         console.log(this.props.selected)
    //     }
    //     // console.log(array)
    //     console.log(this.state.selected)
    //     // console.log(array)
    //     // console.log(this.state.selected)
    // }


    render() {

        let reduced = this.props.selected.reduce((acc, item) => {
            //find first matching item in acc and set it as value of filteredItem
            let filteredItem = acc.filter(item2 => item2.id === item.id)[0]
            //if filteredItem is already in acc, increase its quantity by 1 
            if (filteredItem !== undefined) {
                filteredItem.quantity++
                filteredItem.price = filteredItem.price * filteredItem.quantity
            }
            // else: push it to acc 
            else { acc.push({ ...item, quantity: 1 }) }
            return acc
        }, []).filter((item) =>
            item.name.toLowerCase().indexOf(this.props.search) !== -1)


        let price = reduced.map((item) => item.price)





        if (this.props.selected.length > 0)
            return (

                <div className="cart" >
                    < table >
                        <thead>
                            <tr>
                                <th>products</th>
                                <th>quantity</th>
                                <th>price</th>
                            </tr>
                        </thead>
                        {reduced.map(item =>
                            <tr className="tableRow">
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price} EUR</td>
                                < ButtonRemove
                                    item={item}
                                    //selected={this.props.selected}

                                    name="-"
                                    removeItem={this.props.removeItem}

                                />

                                <ButtonAdd
                                    item={item}
                                    //selected={this.props.selected}
                                    addItem={this.props.addItem}
                                    name="+"
                                />
                                <div className="button">{this.props.children}</div>
                            </tr>

                        )}
                    </table >
                </div >

            )
        else return (
            <h4> Your cart is empty</h4>

        )
    }
}

export default Cart