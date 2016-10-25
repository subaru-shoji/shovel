import React from 'react';

import { connect } from 'react-redux';

import NovelCard from '../components/Novel/NovelCard';
import InfiniteScroll from 'redux-infinite-scroll';

import { updateSearchResult } from '../actions/action';

function NovelList({novels}) {
  const cards = novels.map((novel) => (<NovelCard novel={novel} />));

  return (
    <InfiniteScroll items={ cards } loader={(<card>loading!!.</card>)} loadMore={() => console.log('loading...')}/>
  );
};

export default connect(
  state => ({ novels: state.SearchResult.novels }),
  { updateSearchResult }
)(NovelList);
