import React from 'react';

import { browserHistory } from 'react-router'
import serialize from 'form-serialize';

import MainLayout from '../Common/MainLayout';
import SearchBar from './SearchBar';
import NovelList from './NovelList';

class Novels extends React.Component {
  searchNovel(event) {
    event.preventDefault();

    const form = (event.currentTarget.form || event.currentTarget);
    const query = serialize(form, { hash: true });

    browserHistory.push({query: query});
  }

  render () {
    const header = (<SearchBar searchMethod={this.searchNovel.bind(this)}/>);
    const main = (<NovelList query={this.props.location.query}/>);

    return (      
      <MainLayout header={header}>
        {main}
      </MainLayout>
    );
  }
};

export default Novels;
