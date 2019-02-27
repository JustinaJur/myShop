import React from 'react';
import duomenys from '../products.json'
import Button from "./Button"
//import { BrowserRouter, Route, Switch } from 'react-router-dom';
import addButton from './ButtonAdd'

class Item extends React.Component {
    render() {
        //let selected = `${this.props.selected}`
        let filteredDuomenys = duomenys.products.filter((item) =>
            item.name.toLowerCase().indexOf(this.props.search) !== -1
            || item.description.toLowerCase().indexOf(this.props.search) !== -1);






        return (
            <div>
                <div className="products-container">
                    {/* {duomenys.products
                        .filter((item) =>
                            item.name.toLowerCase().indexOf(this.props.search) !== -1
                            || item.description.toLowerCase().indexOf(this.props.search) !== -1) */}
                    {filteredDuomenys.map((item) =>
                        <div>
                            <h3> {item.name}</h3>
                            <img
                                height={100}
                                src={`/products/${item.image}`}
                            />
                            {item.description}
                            <h3> {item.price} EUR</h3>

                            <Button
                                // <--siunciu paspausta item
                                addItem={this.props.addItem}
                                removeItem={this.props.removeItem}


                                // -->
                                item={item}
                                selected={this.props.selected}
                                //-->
                                name="add to cart"
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



