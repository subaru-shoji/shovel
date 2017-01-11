import React from 'react';

import naroujs from 'naroujs';
import promiseRetry from 'promise-retry';
import R from 'ramda';

import NovelCard from './NovelCard';
import Loader from './Loader';
import LoadButton from './LoadButton'

import { SEARCH_LIMIT, SHOW_PER_SEARCH } from '../../../../constants';


class NovelList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      novels: [],
      hasMore: false,
      loading: !R.isEmpty(this.props.query),
      page: 0
    };
  }

  hasMore (novels, allcount) {
    return ((novels.length) <= Math.min(SEARCH_LIMIT, allcount));
  }

  addNextNovelList() {
    // On componentDidMount, setState doesn't work.
    this.setState({
      loading: true
    });
    const query = this.decorateSearchQuery(this.props.query, this.state.page + 1);

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
        hasMore: hasMore,
        loading: false,
        page: this.state.page + 1
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
    this.setState({
      novels: [],
      page: 0
    });
    this.addNextNovelList();
  }

  componentDidMount(){
    if (!R.isEmpty(this.props.query)) {
      this.addNextNovelList();
    }
  }

  render() {
    const cards = this.generateCards(this.state.novels);
    const loadButton = (
      <LoadButton
        onClick={this.addNextNovelList.bind(this)}
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
}


export default NovelList;
