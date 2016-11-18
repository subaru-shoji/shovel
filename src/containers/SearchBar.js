import React from 'react';
import { connect } from 'react-redux';

import serialize from 'form-serialize';
import naroujs from 'naroujs';

import SearchForm from '../components/Search/SearchForm';
import { addNarouList, initializeNarouList, updateSearchQuery, openMenu } from '../actions/action';

class SearchBar extends React.Component {
  searchNovel(event) {
    event.preventDefault();

    const form = (event.currentTarget.form || event.currentTarget);
    const query = serialize(form, { hash: true });

    this.props.updateSearchQuery(query);
    this.props.initializeNarouList();

    naroujs(query).then((result)=> this.props.addNarouList(result.items))
  }
  render() {
    return (
      <div>
        <SearchForm
          searchMethod={this.searchNovel.bind(this)}
          openMenu={this.props.openMenu.bind(this)}
        />
      </div>
    );
  }
}

export default connect(
  null, { addNarouList, initializeNarouList, updateSearchQuery, openMenu }
)(SearchBar);
