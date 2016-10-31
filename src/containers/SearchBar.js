import React from 'react';
import { connect } from 'react-redux';

import serialize from 'form-serialize';
import naroujs from 'naroujs';

import SearchForm from '../components/Search/SearchForm';
import { updateNarouList, updateSearchQuery } from '../actions/action';

class SearchBar extends React.Component {
  searchNovel(event) {
    const form = event.currentTarget.form;
    const query = serialize(form, { hash: true });
    const updateNarouList = this.props.updateNarouList;

    this.props.updateSearchQuery(query)

    naroujs(query).then((result)=> updateNarouList(result.items))
  }
  render() {
    return (
      <div>
        <SearchForm
          searchMethod={this.searchNovel.bind(this)}
        />
      </div>
    );
  }
}

export default connect(
  null, { updateNarouList, updateSearchQuery }
)(SearchBar);
