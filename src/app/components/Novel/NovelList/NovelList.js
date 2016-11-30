import React from 'react';

import { connect } from 'react-redux';

import naroujs from 'naroujs';
import InfiniteScroll from 'react-infinite-scroller';
import CircularProgress from 'material-ui/CircularProgress';


import NovelCard from './NovelCard';

import { addNarouList } from '../../../actions';

import { SEARCH_LIMIT } from '../../constants/constant';


class NovelList extends React.Component {
  addNextNovelList(page){
    const query = Object.assign({
      st: page * (this.props.query.lim) + 1
    }, this.props.query);

    naroujs(query).then((result) => {
      this.props.addNarouList(result.items);
    });
  }
  render() {
    const cards = this.props.novels.map((novel) => (<NovelCard novel={novel} key={novel.ncode} />));
    const loader = (
      <div style={{textAlign: 'center'}}>
        <CircularProgress/>
      </div>
    );

    const limit = Number(this.props.query.lim) || 0;

    const hasMore = ((limit + cards.length) <= SEARCH_LIMIT);
    const isShowLoader = (cards.length > 0 && limit <= cards.length);

    return (
      <InfiniteScroll
        pageStart={0}
        hasMore={ hasMore }
        initialLoad={false}
        loadMore={this.addNextNovelList.bind(this)}
        loader={ isShowLoader ? loader : '' }
        style={{width: '100%'}}
      >
        { cards }
      </InfiniteScroll>
    );
  }
}


export default connect(
  state => ({
    novels: state.lists.merged,
    query: state.params.query
  }),
  { addNarouList }
)(NovelList);
