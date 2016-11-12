import React from 'react';

import { connect } from 'react-redux';

import naroujs from 'naroujs';
import InfiniteScroll from 'redux-infinite-scroll';
import CircularProgress from 'material-ui/CircularProgress';


import NovelCard from './NovelCard';

import { addNarouListList } from '../actions/action';

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

    const novels = this.props.novels
    const addNarouListList = this.props.addNarouListList;

    const query = Object.assign({}, this.props.query, {
      st: this.state.page * (this.props.query.lim) + 1
    });

    this.setState({loadingMore: true})

    naroujs(query).then((result) => {
      addNarouListList(novels.concat(result.items))
      this.setState({
        loadingMore: false,
        page: (this.state.page + 1)
      })
    });
  }
  render() {
    const cards = this.props.novels.map((novel) => (<NovelCard novel={novel} key={novel.ncode} />));

    return (
      <InfiniteScroll
        loadingMore={this.state.loadingMore}
        loadMore={this.addNextNovelList.bind(this)}
        elementIsScrollable={false}
        loader={
          <div style={{textAlign: 'center'}}>
            <CircularProgress/>
          </div>
        }
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
  { addNarouListList }
)(NovelList);
