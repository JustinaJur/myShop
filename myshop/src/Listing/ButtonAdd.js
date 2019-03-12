import React from 'react';

class ButtonAdd extends React.Component {
    render() {
        let filteredSelected = this.props.selected.filter(item => item.name === this.props.item.name)
        let numberOfItems = filteredSelected.length;

        return (
            <div>
                <button
                    style={{ backgroundColor: 'greenyellow' }}
                    onClick={() => {
                        //send clicked item
                        this.props.addItem(this.props.item)
                    }}
                >
                    {this.props.name}
                    ({numberOfItems})

                </button>
            </div >
        )
    }
}

export default ButtonAdd