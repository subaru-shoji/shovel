import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

import serialize from 'form-serialize';
import naroujs from 'naroujs';

import SearchForm from '../components/Search/SearchForm';
import { updateSearchResult } from '../actions/action';

class SearchBar extends React.Component {
  searchNovel() {
    const form = ReactDOM.findDOMNode(this.refs.searchForm);
    const params = serialize(form, { hash: true });
    const updateSearchResult = this.props.updateSearchResult;

    naroujs(params).then((result)=> updateSearchResult(result.items, params))
  }
  render() {
    return (
      <div>
        <SearchForm
          refName="searchForm"
          searchMethod={this.searchNovel.bind(this)}
        />
      </div>
    );
  }
}

export default connect(
  null, { updateSearchResult }
)(SearchBar);
