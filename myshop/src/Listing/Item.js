import React from 'react';

import duomenys from '../products.json'
import Button from "./Button"
import { BrowserRouter, Route, Switch } from 'react-router-dom';


// export default function Item(props) {
class Item extends React.Component {



    // handleClick = () => {

    //     console.log(this.props.item.name);
    //     //this.props.onTextChange(item)
    //     var val = this.props.item.name;
    // }

    // handler() {
    //     console.log("labas")
    //     // this.setState({
    //     //     messageShown: true
    //     // });
    // }

    render() {
        //let selected = `${this.props.selected}`

        return (
            <div>

                {/* filteredData = duomenys.products.filter((item) =>
                      item.name.toLowerCase().indexOf(props.search) !== -1 ||
                      item.description.toLowerCase().indexOf(props.search) !== -1). */}

                {/* duomenys.products.map((item) => return { */}

                <div className="products-container">

                    {duomenys.products
                        .filter((item) =>
                            item.name.toLowerCase().indexOf(this.props.search) !== -1
                            || item.description.toLowerCase().indexOf(this.props.search) !== -1)
                        .map((item) =>
                            <div>
                                <h3> {item.name}</h3>
                                <img
                                    height={100}
                                    src={`/products/${item.image}`}
                                />
                                {item.description}
                                <h3> {item.price} EUR</h3>

                                <Button
                                    action={this.props.handler}
                                    item={item}


                                // val={this.props.val}
                                />

                                <div className="button">{this.props.children}</div>

                            </div>
                        )
                    }
                </div>
            </div >
        )
    }
}






export default Item


















//         let name = `${this.props.item.name}`;
//         let details = `${this.props.item.description}`;
//         let price = `${this.props.item.price} EUR`


                                        //         return (
//             <div>
//                 <div >
//                     <h3> {name} </h3>
//                     <img
//                         height={100}
//                         src={`/products/${this.props.item.image}`}
//                     />
//                     <div> {details} </div>
//                     <h3>{price}</h3>
//                     <div className="button">{this.props.children}</div>
//                 </div>

//             </div>
//         )
//     }
// }



