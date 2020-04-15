import React, { Component } from 'react';
import { connect } from "react-redux";
import { seachUpdate } from "../../actions";
import './Search.scss';

class Search extends Component {
  // TODO: Add buffer to prevent cards fetch while user is still typing

  handleSearchChange(e) {
    const nameQuery = e.target.value.replace(/[^0-9a-z]/gi, '');
    this.props.seachUpdate(nameQuery);
  }

  render() {
    return (
      <div id="search-box">
        <div className="input-container">
          <label for="search-input">Search </label>
          <input id="search-input" onChange={this.handleSearchChange.bind(this)} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ data = {} }) => ({
  data
});

export default connect(
  mapStateToProps,
  {
    seachUpdate
  }
)(Search);
