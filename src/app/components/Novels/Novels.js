import React from 'react';
import { connect } from 'react-redux';

import MainLayout from '../Common/MainLayout';

import SearchBar from './SearchBar';
import NovelList from '../Common/NovelList';


import { initializeDbListWith } from '../../actions/listActions';

import db from '../../db';

class Novels extends React.Component {
  componentDidMount(){
    db.novels.toArray()
      .then((v)=> this.props.initializeDbListWith(v));
  }
  render () {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh'
    };

    const header = {
      flex: '0 0 auto'
    };

    const content = {
      flex: '1 1 auto',
      overflowY: 'auto',
    }

    return (
      <div style={containerStyle}>
        <header style={header}>
          <SearchBar/>
        </header>
        <div style={content}>
          <MainLayout mainComponent={(<NovelList/>)} />
        </div>
      </div>
    );
  }
};

export default connect(
  null,
  { initializeDbListWith }
)(Novels);
