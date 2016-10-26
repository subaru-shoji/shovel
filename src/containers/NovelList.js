import React from 'react';

import { connect } from 'react-redux';

import naroujs from 'naroujs';
import InfiniteScroll from 'redux-infinite-scroll';

import NovelCard from '../components/Novel/NovelCard';

import { updateSearchResult } from '../actions/action';

class NovelList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingMore: false
    }
  }
  addNextNovelList(){
    const novels = this.props.novels
    const updateSearchResult = this.props.updateSearchResult;

    const params = Object.assign({}, this.props.params, {
      st: (((this.props.params.st || 0) / 20) * 20 + 1)
    })
    this.setState({loadingMore: true})

    naroujs(params).then((result) => {
      updateSearchResult(novels.concat(result.items), params)
      this.setState({loadingMore: false})
    });
  }
  render() {
    const cards = this.props.novels.map((novel) => (<NovelCard novel={novel} />));

    return (
      <InfiniteScroll loadingMore={this.state.loadingMore} loadMore={this.addNextNovelList.bind(this)} elementIsScrollable={false}>
        { cards }
      </InfiniteScroll>
    );
  }
}


export default connect(
  state => ({
    novels: state.SearchResult.novels,
    params: state.SearchResult.params
  }),
  { updateSearchResult }
)(NovelList);
