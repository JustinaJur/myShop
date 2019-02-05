import React from 'react';
import Item from "./Item"
import duomenys from '../products.json'
import Button from "./Button"
import { BrowserRouter, Route, Switch } from 'react-router-dom';



/// DISPLAYING
class ItemContainer extends React.Component {
    render() {

        return (
            <div className="products-container">
                {/* takes products array from duomenys, returns filtered (based on search input) 
                    and mapped array to ITEM component */}

                {/* {duomenys.products
                            .filter((item) =>
                                item.name.toLowerCase().indexOf(this.props.search) !== -1 ||
                                item.description.toLowerCase().indexOf(this.props.search) !== -1)

                            .map((item) => {
                                // to ITEM and BUTTON we return only separate ELEMENTS
                                return <Item
                                    item={item}

                                >
                                    <Button
                                        item={item}
                                    />
                                </Item>
                            })
                        } */}

            </div >
        )
    }
}


export default ItemContainer
