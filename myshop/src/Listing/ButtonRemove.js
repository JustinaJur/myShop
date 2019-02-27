import React from 'react';

class ButtonRemove extends React.Component {
    render() {
        return (
            <div>
                <button className="ButtonRemove"
                    style={{ width: "100px", backgroundColor: 'tomato' }}
                    onClick={() => {
                        //send clicked item
                        this.props.removeItem(this.props.item);
                    }}
                >
                    {this.props.name}
                </button>
            </div >
        )
    }
}

export default ButtonRemove