import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    const { handleChangeValue, value } = this.props;

    return (
      <div className="SearchBar">
        <form>
          <label>Search products:</label>
          <input
            type="text"
            value={value}
            onChange={handleChangeValue}
            placeholder="Search products..."
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
