import React, { Component } from 'react';


class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            // ieskoma: ''
        }

    }

    onFormSubmit = (ev) => {
        ev.preventDefault();
        // console.log(this.state.ieskoma);
        // this.props.onSubmit(this.state.ieskoma);
    }



    render() {
        return (
            <div className="SearchBar">
                <form onSubmit={this.onFormSubmit}>
                    <label>Search products: </label>
                    <input
                        type="text"
                        value={this.props.value}
                        onChange={this.props.parodykkaivedei}






                    // onChange={(event) => this.setState({
                    //     ieskoma: event.target.value
                    // })}
                    // value={this.state.ieskoma}
                    //placeholder="Search products..."
                    />
                </form>
                {/* <p>{this.state.ieskoma}</p> */}

            </div>
        );
    }
}

export default SearchBar;
