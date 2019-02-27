import React from 'react';
import Item from './Item'

class Button extends React.Component {
    state = {
        //paimu kas ateina
        allSelected: [],
        //renku cia selected
        hereSelected: this.props.selected.filter(item => item.name === this.props.item.name)

        //[this.props.selected.filter(item => item.name === this.props.item.name)],
        //selected: []
    }

    // numberOfItems = 0;
    //updating only button (adding item)
    // addToCart = () => {
    //     this.setState({
    //         //konkreti preke
    //         hereSelected: [...this.state.hereSelected, this.props.item],
    //         //visos prekes
    //         allSelected: [...this.props.selected, this.props.item]
    //     });
    // }

    //LOCAL updating only button (removing item)
    // removeFromCart() {
    //     let selected = this.state.hereSelected;
    //     let array = [...selected]; // make a separate copy of the array
    //     let index = array.indexOf(this.props.item)
    //     console.log(this.props.item)
    //     if (index !== -1) {
    //         array.splice(index, 1);
    //         this.setState({
    //             hereSelected: array,
    //             // itemsInCart: selected.length - 1
    //         });
    //     }
    // }



    updateButton = () => {
        if (this.props.name === "add to cart") {
            let newSelected = this.props.selected.filter(item => item.name == this.props.item.name)
            //console.log(newSelected)
            this.setState((prevState, props) => ({
                hereSelected: newSelected
            }))

            // this.setState({
            //     hereSelected: newSelected
            // })
            //console.log(newSelected)
        }
        else {
            // let firstFound = this.props.hereSelected.filter(item => item.name == this.props.item.name)
            // let array = [...this.state.hereSelected];
            // //let found = array.find(item => item.name === this.props.item.name);
            // if (firstFound) {
            //     let index = array.findIndex(el => el.name == this.props.name);
            //     array.splice(index, 1)

            //     // this.setState((prevState, props) => ({
            //     //     hereSelected: array
            //     // })
            //     this.setState({
            //         hereSelected: array
            //     })

            //     console.log(this.props.selected)
            //     console.log(this.state.hereSelected)
            // }

            // let firstFound = this.props.hereSelected.filter(item => item.name == this.props.item.name)
            let array = [...this.state.selected];
            //let found = array.find(item => item.name === this.props.item.name);
            //if (firstFound) {
            let index = array.findIndex(el => el.name == this.props.item);
            array.splice(index, 1)
            this.setState((prevState, props) => ({
                hereSelected: array
            }))
        }
    }





    render() {

        let numberOfItems = this.state.hereSelected.length;


        return (
            <div className="buttons">

                <button className="right"
                    style={{ width: "100px", height: '25px', backgroundColor: 'greenyellow', border: 'none' }}
                    onClick=
                    {() => {
                        this.updateButton()
                        // this.addToCart();
                        //<-- gauna item is Item kom ir SIUNCIA clicked ITEM I KITA KOMPONENTA-Item-App-Cart 
                        this.props.addItem(this.props.item);

                    }}

                //<--duotas name rankiniu budu
                > {this.props.name}
                    ({numberOfItems})</button>




                <button className="left"
                    style={{ width: "100px", height: '25px', backgroundColor: 'salmon', border: 'none' }}

                    //using here
                    onClick={() => {
                        // this.removeFromCart();
                        this.props.removeItem(this.props.item);
                        this.updateButton()
                    }}>
                    Remove item
                    </button>
            </div >

        )

    }
}





export default Button