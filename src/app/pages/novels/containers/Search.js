import React from 'react';

import { browserHistory } from 'react-router'

import SearchView from '../components/views/Search'

class Search extends React.Component {
  onSearch(query) {
    browserHistory.push({
      query
    });
  }

  render() {
    return (<SearchView {...this.props} onSearch={this.onSearch.bind(this)}/>)
  }
}
;



export default Search;
