import React from 'react';
import Item from './Item'

class ButtonRemove extends React.Component {
    render() {
        return (
            <div>

                <button
                    style={{ width: "100px", backgroundColor: 'NavajoWhite' }}

                    onClick={() => {
                        this.props.removeItem(this.props.item);
                        console.log(this.props.item)
                    }}
                >

                    {this.props.name}
                </button>
            </div >

        )

    }
}





export default ButtonRemove