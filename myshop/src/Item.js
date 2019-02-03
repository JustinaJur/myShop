import React from 'react';

export default function Item(props) {
    // class Item extends React.Component {

    // state = {
    //     numberOfItems: 0
    // }


    // render() {

    // let numberOfItems = 0;
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
                <button style={{ width: "100px" }}
                    //props nurodo i funkcijos perdavima tevams
                    onClick={() => props.addToCart(item.name)}

                > add to cart (0)
                    {/* ({numberOfItems})  */}
                </button>
            </li>
        </div >
    );




    return (
        <div className="products-container">
            {filteredData}
        </div>
    )
}


// export default Item

