import React from 'react';

import { connect } from 'react-redux';

import NovelCard from '../components/Novel/NovelCard';
import InfiniteScroll from 'redux-infinite-scroll';

import { updateSearchResult } from '../actions/action';

export default function NovelList({SearchResult}) {
  const novels = SearchResult.novels;
  const cards = novels.map((novel) => (<NovelCard novel={novel} />));

  return (
    <InfiniteScroll items={ cards } loader={(<card>loading!!.</card>)} loadMore={() => console.log('loading...')}/>
  );
};

export default connect(
  state => ({ SearchResult: state.SearchResult }),
  { updateSearchResult }
)(NovelList);
