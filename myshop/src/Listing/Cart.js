import React from 'react'
import Button from './Button'

class Cart extends React.Component {

    render() {
        let selected = `${this.props.selected}`


        return (
            <div>
                <h3>Your items in cart:</h3>
                <ul>
                    <li>{selected} </li> <br></br>
                </ul>
            </div>

        )
    }
}

export default Cart