import React from 'react';

import NovelCard from '../components/Novel/NovelCard';
import InfiniteScroll from 'redux-infinite-scroll';

export default function NovelList({novels}) {
  const cards = novels.map((novel) => (<NovelCard novel={novel} />));

  return (
    <InfiniteScroll items={ cards } loader={(<card>loading!!.</card>)} loadMore={() => console.log('loading...')}/>
  );
}
