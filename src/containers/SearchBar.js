import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

import serialize from 'form-serialize';
import naroujs from 'naroujs';

import SearchForm from '../components/Search/SearchForm';
import { updateSearchResult } from '../actions/action';

class SearchBar extends React.Component {
  handleSearch(event) {
    event.preventDefault();
    this.searchNovel();
  }
  searchNovel() {
    const form = ReactDOM.findDOMNode(this.refs.searchForm);
    const params = serialize(form, { hash: true });
    const updateSearchResult = this.props.updateSearchResult;

    naroujs(params).then((novels)=> updateSearchResult({novels, params}))
  }
  render() {
    return (
      <div>
        <SearchForm
          ref="searchForm"
          searchMethod={this.handleSearch.bind(this)}
        />
      </div>
    );
  }
}

export default connect(
  null, { updateSearchResult }
)(SearchBar);
