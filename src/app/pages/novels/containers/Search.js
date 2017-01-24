import React from 'react';

import { browserHistory } from 'react-router'
import serialize from 'form-serialize';

import SearchView from '../components/views/Search'

class Search extends React.Component {
  onSearch(query) {
    browserHistory.push({query});
  }

  render () {
    return (<SearchView onSearch={this.onSearch.bind(this)}/>)
  }
};



export default Search;
