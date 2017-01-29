import React from 'react';

import NovelCard from '../NovelCard';
import Loader from './Loader';
import LoadButton from './LoadButton'

const NovelListView = ({novels, loading, hasMore, onLoadMore, onReadButtonTouch}) => {
  const cards = novels.map((novel) => (
    <NovelCard
    novel={novel}
    key={novel.ncode}
    updateMethod={onReadButtonTouch}
    />
  ));
  const loadButton = (
  <LoadButton
  onClick={onLoadMore}
  style={{
    width: '100%'
  }}
  />
  );

  return (
    <div style={{
      width: '100%'
    }}>
      { cards }
      <div style={{
      margin: '1em 0 1em 0'
    }}>
        { loading ? <Loader/> : (hasMore ? loadButton : '') }
      </div>
    </div>
    );
}

export default NovelListView;
