import React from 'react';
import { connect } from 'react-redux';

import serialize from 'form-serialize';
import naroujs from 'naroujs';

import SearchField from './SearchField';
import SearchButton from './SearchButton';
import SearchToolBar from './SearchToolBar';

import CommonBar from '../../Common/CommonBar'

import {SHOW_PER_SEARCH} from '../../../../constants';

import { addNarouList, initializeNarouList, updateSearchQuery } from '../../../actions/listActions';

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
      <form onSubmit={this.searchNovel.bind(this)}>
        <CommonBar
          title={(<SearchField/>)}
          iconElementRight={(<SearchButton searchMethod={this.searchNovel.bind(this)}/>)}/>
        <input name="lim" type="hidden" value={SHOW_PER_SEARCH}/>
        <div>
          <SearchToolBar/>
        </div>
      </form>
    );
  }
}


export default connect(
  null, { addNarouList, initializeNarouList, updateSearchQuery }
)(SearchBar);