import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }
  render() {
    return (
      <div>
        <input
          onChange={(event) => this.setState({ term: event.target.value })}
        />ƒ
      </div>
    );
  }
}

export default SearchBar;
