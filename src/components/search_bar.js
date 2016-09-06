import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };
  }
  render() {
    return (
      <div className="search-bar">
        <input
          placeholder="Look up videos"
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  // declare an Event Handler
  // or handleInputChange
  // onInputChange(event) {
  //   // to get access to the value of the input
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
