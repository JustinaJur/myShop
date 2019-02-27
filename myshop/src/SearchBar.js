import React, { Component } from 'react';


class SearchBar extends Component {

    render() {
        return (

            <div className="SearchBar">
                <form>
                    {/* onSubmit={(e) => this.props.onFormSubmit(e)}> */}
                    <label>Search products: </label>
                    <input
                        type="text"
                        value={this.props.value}
                        //send input to App
                        onChange={this.props.handleChangeValue}
                        placeholder="Search products..."
                    />
                </form>
            </div>
        );
    }
}

export default SearchBar;
