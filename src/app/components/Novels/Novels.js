import React from 'react';

import { browserHistory } from 'react-router'
import serialize from 'form-serialize';
import { connect } from 'react-redux';


import MainLayout from '../Common/MainLayout';
import SearchBar from './SearchBar';
import NovelList from './NovelList';

import db from '../../db';

import { commitRecord } from '../../actions/readListActions';

class Novels extends React.Component {
  searchNovel(event) {
    event.preventDefault();

    const form = (event.currentTarget.form || event.currentTarget);
    const query = serialize(form, { hash: true });

    browserHistory.push({query: query});
  }

  commitRecord(data) {
    db.novels.update(data.ncode, data);
    this.props.commitRecord(data)
  }

  render () {
    const header = (<SearchBar searchMethod={this.searchNovel.bind(this)}/>);
    const main = (
      <NovelList
        query={this.props.location.query}
        updateMethod={this.commitRecord.bind(this)}
      />
    );

    return (
      <MainLayout header={header}>
        {main}
      </MainLayout>
    );
  }
};



export default connect(
  (state) => ({
    readList: state.readList,
  }),
  { commitRecord }
)(Novels);
