import { Component } from "react";
import "./SearchBox.css";

class SearchBox extends Component {
  render() {
    const { className, placeholder, onSearchChange } = this.props;
    return (
      <input 
        type="search"
        className= { `search-box ${className}` }
        placeholder= { placeholder }
        onChange={ onSearchChange }
      />
    )
  }
}

export default SearchBox;