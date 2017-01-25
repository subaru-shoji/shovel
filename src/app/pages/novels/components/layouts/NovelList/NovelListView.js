import React from 'react';

import NovelCard from '../NovelCard';
import Loader from './Loader';
import LoadButton from './LoadButton'

const NovelListView = ({novels, onButtonTouch}) => {
  const cards = novels.map((novel) => (
    <NovelCard
      novel={novel}
      key={novel.ncode}
      updateMethod={onButtonTouch}
    />
  ));
  const loadButton = (
    <LoadButton
      onClick={this.addNextNovelList.bind(this, this.props.query)}
      style={{width: '100%'}}
    />
  );

  return (
    <div style={{width: '100%'}}>
      { cards }
      <div style={{margin: '1em 0 1em 0'}}>
        { this.state.loading ? <Loader/> : (this.state.hasMore ? loadButton : '') }
      </div>
    </div>
  );
}

export default NovelListView;
