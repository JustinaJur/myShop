import React from 'react';

export default function Item(props) {

    let filteredData = props.duomenys.products.filter((item) =>
        item.name.toLowerCase().indexOf(props.search) !== -1 ||
        item.description.toLowerCase().indexOf(props.search) !== -1
    ).map((item) =>
        <div>
            <li className="component">
                <h3> {item.name}</h3>
                <img
                    height={100}
                    src={`/products/${item.image}`}
                    title={item.name}
                />
                {item.description}
                <h4> ${item.price} </h4>
                <button style={{ width: "100px" }}> add to cart </button>
            </li>
        </div>
    );

    return (
        <div className="products-container">
            {filteredData}

        </div>
    )
}

    // const thisItemInCart = props.cart.filter(item => item.id === props.product.id)[0]

    // return <div className='product-list-item'>
    //     <h3>{props.product.name}</h3>
    //     <img
    //         height={100}
    //         title={props.product.name}
    //         src={`/products/${props.product.image}`}
    //     />
    //     <div>{props.product.description}</div>
    //     <div>${props.product.price}</div>
    //     <div>
    //         <button className="add-btn" onClick={() => props.addToCart(props.product)}>Add to cart ({
    //             thisItemInCart && thisItemInCart.quantity || 0
    //         })</button>
    //         {thisItemInCart
    //             ? <button className="remove-btn" onClick={() => props.removeFromCart(props.product)}>Remove</button>
    //             : null
    //         }
    //     </div>
    // </div>
