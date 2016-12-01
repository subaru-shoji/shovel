import React from 'react';
import { connect } from 'react-redux';

import MainLayout from '../Common/MainLayout';

import SearchBar from './SearchBar';
import NovelList from './NovelList';


import { initializeDbListWith } from '../../actions';

import db from '../../db';

class Novel extends React.Component {
  componentDidMount(){
    db.novels.toArray()
      .then((v)=> this.props.initializeDbListWith(v));
  }
  render () {
    const content = {
      width: 750
    };

    const side = {
      flex: 1
    };

    return (
      <div>
        <header>
          <SearchBar/>
        </header>
        <MainLayout mainComponent={NovelList}/>
      </div>
    );
  }
};

export default connect(
  null,
  { initializeDbListWith }
)(Novel);
