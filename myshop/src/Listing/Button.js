import React from 'react';
import Item from './Item'

class Button extends React.Component {
    state = {
        selected: [],
        howManyInCart: 0,
    }
    addToCart = () => {
        let selected = this.state.selected;

        this.setState({
            selected: [...selected, this.props.item.name],
            howManyInCart: selected.length + 1
        })
        console.log(selected)
        // var selectedHA = selected.filter((item) => item === this.props.item.name);
        // this.setState({
        //     howManyInCart: selectedHA.length
        // })
    }
    removeFromCart() {
        let selected = this.state.selected;
        let array = [...selected]; // make a separate copy of the array
        let index = array.indexOf(this.props.item.name)
        if (index !== -1) {
            array.splice(index, 1);
            this.setState({
                selected: array,
                howManyInCart: selected.length - 1
            });
        }
    }


    render() {

        let selected = this.state.selected;
        let howManyInCart = this.state.howManyInCart;


        return (
            <div>

                <h1> Your itmes: {selected}</h1>
                <button
                    style={{ width: "100px", backgroundColor: '#94FACE' }}
                    onClick={() => {
                        this.addToCart();
                    }
                    }
                > add to cart ({howManyInCart})</button>
                <button
                    style={{ width: "100px", backgroundColor: 'NavajoWhite' }}
                    onClick={() => this.removeFromCart()}>
                    Remove item
                    </button>
            </div >

        )

    }
}





export default Button