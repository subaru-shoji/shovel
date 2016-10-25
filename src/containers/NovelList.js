import React from 'react';

import { connect } from 'react-redux';

import naroujs from 'naroujs';
import InfiniteScroll from 'redux-infinite-scroll';

import NovelCard from '../components/Novel/NovelCard';

import { updateSearchResult } from '../actions/action';

class NovelList extends React.Component {
  addNextNovelList(){
    const novels = this.props.novels
    const updateSearchResult = this.props.updateSearchResult;

        console.log(this.props.params);

    const params = Object.assign({}, this.props.params, {
      st: (((this.props.params.st || 0) / 20) * 20 + 1)
    })

    naroujs(params).then((result)=> updateSearchResult(novels.concat(result.items), params))
  }
  render() {
    const cards = this.props.novels.map((novel) => (<NovelCard novel={novel} />));

    return (
      <InfiniteScroll items={ cards } loadMore={this.addNextNovelList.bind(this)}/>
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
