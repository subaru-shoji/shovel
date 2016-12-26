import React from 'react';

import { browserHistory } from 'react-router'
import serialize from 'form-serialize';

import MainLayout from '../Common/MainLayout';
import SearchBar from './SearchBar';

class Novels extends React.Component {
  searchNovel(event) {
    event.preventDefault();

    const form = (event.currentTarget.form || event.currentTarget);
    const query = serialize(form, { hash: true });

    browserHistory.push({query: query});
  }

  render () {
    const header = (<SearchBar searchMethod={this.searchNovel.bind(this)}/>);

    return (      
      <MainLayout header={header}>
      </MainLayout>
    );
  }
};

export default Novels;
