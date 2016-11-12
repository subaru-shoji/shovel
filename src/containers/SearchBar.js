import React from 'react';
import { connect } from 'react-redux';

import serialize from 'form-serialize';
import naroujs from 'naroujs';

import SearchForm from '../components/Search/SearchForm';
import { addNarouListList, initalizeNarouList, updateSearchQuery } from '../actions/action';

class SearchBar extends React.Component {
  searchNovel(event) {
    event.preventDefault();

    const form = event.currentTarget.form;
    const query = serialize(form, { hash: true });
    const addNarouListList = this.props.addNarouListList;

    this.props.updateSearchQuery(query);

    this.props.initalizeNarouList();
    naroujs(query).then((result)=> addNarouListList(result.items))
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
  null, { addNarouListList, initalizeNarouList, updateSearchQuery }
)(SearchBar);
