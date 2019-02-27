import React from 'react';

class ButtonAdd extends React.Component {
    render() {
        return (
            <div>
                <button className="ButtonAdd"
                    style={{ width: "100px", backgroundColor: 'greenyellow' }}
                    onClick={() => {
                        //send clicked item
                        this.props.addItem(this.props.item)
                    }}
                >
                    {this.props.name}
                </button>
            </div >
        )
    }
}

export default ButtonAdd