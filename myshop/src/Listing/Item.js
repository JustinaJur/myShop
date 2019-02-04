import React from 'react';


// export default function Item(props) {
class Item extends React.Component {


    render() {
        let name = `${this.props.item.name}`;
        let details = `${this.props.item.description}`;
        let price = `${this.props.item.price} EUR`

        return (
            <div>
                <div >
                    <h3> {name} </h3>
                    <img
                        height={100}
                        src={`/products/${this.props.item.image}`}
                    />
                    <div> {details} </div>
                    <h3>{price}</h3>
                    <div className="button">{this.props.children}</div>
                </div>
            </div>
        )
    }
}


export default Item

