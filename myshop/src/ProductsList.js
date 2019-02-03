import React from 'react';
import Item from "./Item"
import duomenys from './products.json'

// import data from './products.json'


export default function ProductsList(props) {





    return (
        <div>
            <Item className="products-container"
                search={props.search}
                duomenys={duomenys}
                addToCart={props.addToCart}
            // parodykprekes={props.parodykprekes}

            />
        </div>
    )


}

