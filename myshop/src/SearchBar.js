import React, { Component } from 'react';


class SearchBar extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         // ieskoma: ''
    //     }

    // }

    // onFormSubmit = (ev) => {
    //     ev.preventDefault();
    // console.log(this.state.ieskoma);
    // this.props.onSubmit(this.state.ieskoma);


    render() {
        return (

            <div className="SearchBar">
                <form>
                    {/* onSubmit={(e) => this.props.onFormSubmit(e)}> */}
                    <label>Search products: </label>
                    <input
                        type="text"
                        value={this.props.value}
                        //we send input to App
                        onChange={this.props.handleChangeValue}
                        placeholder="Search by name..."
                    />
                </form>
                {/* <p>{this.state.ieskoma}</p> */}

            </div>
        );
    }
}

export default SearchBar;
