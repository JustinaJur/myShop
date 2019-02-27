import React from 'react';

class Button extends React.Component {
    render() {

        let filteredSelected = this.props.selected.filter(item => item.name === this.props.item.name)
        let numberOfItems = filteredSelected.length;

        return (
            <div className="buttons">

                <button className="right"
                    style={{ width: "100px", height: '25px', backgroundColor: 'greenyellow', border: 'none' }}
                    onClick={() => { this.props.addItem(this.props.item) }}>
                    {this.props.name}
                    ({numberOfItems})
                    </button>


                <button className="left"
                    style={{ width: "100px", height: '25px', backgroundColor: 'salmon', border: 'none' }}
                    onClick={() => { this.props.removeItem(this.props.item) }}>
                    Remove item
                    </button>
            </div >
        )
    }
}





export default Button