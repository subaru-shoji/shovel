import React from 'react';

import { connect } from 'react-redux';

import naroujs from 'naroujs';
import InfiniteScroll from 'redux-infinite-scroll';

import NovelCard from '../components/Novel/NovelCard';

import { updateNarouList } from '../actions/action';

class NovelList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingMore: false,
      page: 0
    }
  }
  addNextNovelList(){
    if (Object.keys(this.props.query).length === 0) {
      return false;
    }

    const narou = this.props.narou
    const updateNarouList = this.props.updateNarouList;

    const query = Object.assign({}, this.props.query, {
      st: this.state.page * (this.props.query.lim) + 1
    });

    this.setState({loadingMore: true})

    naroujs(query).then((result) => {
      updateNarouList(narou.concat(result.items))
      this.setState({
        loadingMore: false,
        page: (this.state.page + 1)
      })
    });
  }
  render() {
    const cards = this.props.narou.map((novel) => (<NovelCard novel={novel} key={novel.ncode} />));

    return (
      <InfiniteScroll loadingMore={this.state.loadingMore} loadMore={this.addNextNovelList.bind(this)} elementIsScrollable={false}>
        { cards }
      </InfiniteScroll>
    );
  }
}


export default connect(
  state => ({
    narou: state.lists.narou,
    query: state.params.query
  }),
  { updateNarouList }
)(NovelList);
