import React from 'react';


class ButtonAdd extends React.Component {

    render() {


        return (
            <div>

                <button
                    style={{ width: "100px", backgroundColor: 'NavajoWhite' }}

                    onClick={() => {

                        this.props.addItem(this.props.item)
                        console.log(this.props.item)

                    }}
                >
                    {this.props.name}
                </button>
            </div >
        )
    }
}





export default ButtonAdd