import React from 'react';

import naroujs from 'naroujs';
import promiseRetry from 'promise-retry';
import InfiniteScroll from 'react-infinite-scroller';
import R from 'ramda';

import NovelCard from './NovelCard';
import Loader from './Loader';

import { SEARCH_LIMIT, SHOW_PER_SEARCH } from '../../../../constants';


class NovelList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      novels: [],
      hasMore: !R.isEmpty(this.props.query)
    };
  }

  hasMore (novels, allcount) {
    return ((novels.length) <= Math.min(SEARCH_LIMIT, allcount));  
  }

  addNextNovelList(page) {
    const query = this.decorateSearchQuery(this.props.query, page);
    // Retry Ajax
    promiseRetry((retry, number) => {
      return naroujs(query)
      .catch(retry);
    })
    .then((result) => {
      const novels = R.concat(this.state.novels, result.items);
      const hasMore = this.hasMore(novels, result.allcount);
      this.setState({
        novels: novels,
        hasMore: hasMore
      });
    });
  }

  decorateSearchQuery(query, page) {
    return R.merge({
      lim: SHOW_PER_SEARCH,
      st: ((page - 1) * SHOW_PER_SEARCH) + 1
    }, query);
  }

  generateCards (novels) {
    return novels.map((novel) => (<NovelCard novel={novel} key={novel.ncode} />));
  }

  componentWillReceiveProps(){
    this.setState({hasMore: true});
  }

  render() {
    const cards = this.generateCards(this.state.novels);
    
    return (
      <InfiniteScroll
        pageStart={0}
        hasMore={this.state.hasMore}
        initialLoad={true}
        loadMore={this.addNextNovelList.bind(this)}
        loader={this.state.hasMore ? <Loader/> : ''} 
        useWindow={false}
        style={{width: '100%'}}
      >
        { cards }
      </InfiniteScroll>
    );
  }
}


export default NovelList;
