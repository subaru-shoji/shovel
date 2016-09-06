import React from 'react';
import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';
import NovelList from './NovelList';

import { searchNovelAsync } from '../actions/action';

const { Component, PropTypes } = React;

class App extends Component {
  static propTypes = {
    novels: PropTypes.array,
    searchNovelAsync: PropTypes.func
  }
  componentDidMount() {
    this.props.searchNovelAsync();
  }
  render() {
    return (
      <div>
        <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
        <NovelList novels={this.props.novels} />
      </div>
    );  
  }
}

export default connect(
  state => ({ novels: state.novels }),
  { searchNovelAsync }
)(App)