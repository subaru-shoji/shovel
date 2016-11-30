import React from 'react';
import { connect } from 'react-redux';

import NovelList from './NovelList';
import SearchBar from './SearchBar';
import Menu from './Menu'

import { flexContainer } from '../../styles/style';

import { initializeDbListWith } from '../../redux/actions/action';

import db from '../../db/db';

class App extends React.Component {
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
        <div style={flexContainer}>
          <div style={side}>
            <Menu isMenuOpen={true}/>
          </div>
          <div style={content}>
            <NovelList/>
          </div>
          <div style={side}></div>
        </div>
      </div>
    );
  }
};

export default connect(
  null,
  { initializeDbListWith }
)(App);
