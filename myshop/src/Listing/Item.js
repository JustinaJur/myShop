import React from 'react';
import data from '../products.json'
import ButtonAdd from "./ButtonAdd"
import ButtonRemove from "./ButtonRemove"



class Item extends React.Component {
    render() {
        let filteredData = data.products.filter((item) =>
            item.name.toLowerCase().indexOf(this.props.search) !== -1
            || item.description.toLowerCase().indexOf(this.props.search) !== -1);

        // let filteredSelected = this.props.selected.filter(itemm => itemm.name === this.props.item.name)
        // let numberOfItems = filteredSelected.length;

        return (
            <div>

                <div className="products-container">
                    {filteredData.map(item =>
                        <div>
                            <h3> {item.name}</h3>
                            <img
                                height={100}
                                src={`/products/${item.image}`}
                            />
                            {item.description}
                            <h3> {item.price} EUR</h3>

                            <div className="buttons">
                                <ButtonAdd
                                    item={item}
                                    addItem={this.props.addItem}
                                    selected={this.props.selected}
                                    name="Add Item"
                                />

                                < ButtonRemove
                                    item={item}
                                    removeItem={this.props.removeItem}
                                    name="Remove Item"
                                />
                            </div>
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



