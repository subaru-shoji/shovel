import React from 'react';
import { connect } from 'react-redux';

import NovelList from './NovelList';
import SearchBar from './SearchBar';

const { Component, PropTypes } = React;

class App extends Component {
  static propTypes = {
    novels: PropTypes.array,
  }
  render() {
    return (
      <div>
        <SearchBar/>
        <NovelList novels={this.props.novels} />
      </div>
    );
  }
}

export default connect(
  state => ({ novels: state.novels })
)(App)