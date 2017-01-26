import React from 'react';

import naroujs from 'naroujs';
import promiseRetry from 'promise-retry';
import R from 'ramda';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { List } from 'immutable';

import { SEARCH_LIMIT, SHOW_PER_SEARCH } from '../../../constants';

import db from '../../../../../libs/db';

import * as readListActions  from '../../../../../flux/actions/readListActions';
import NovelListService from '../../../services/NovelListService';

import NovelListView from './NovelListView'


class NovelList extends React.Component {
  constructor (props) {
    super(props);
    this.novelListService = new NovelListService();

    // Implement immutable map.
    this.state = {
      novels: List(),
      hasMore: false,
      loading: !R.isEmpty(this.props.query),
      page: 0
    };

    db.novels.toArray().then((readList)=>{
      this.props.readListActions.update(readList);
    })
  }

  addNextNovelList(_query) {
    const query = this.decorateSearchQuery(_query, this.state.page + 1);
    this.setState({
      loading: true
    });

    // Retry Ajax
    promiseRetry((retry, number) => {
      return naroujs(query)
      .catch(retry);
    })
    .then((result) => {
      const novels = this.novelListService.concat(this.state.novels, result.items, this.props.readList);
      const hasMore = ((novels.count()) <= Math.min(SEARCH_LIMIT, result.allcount));
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

  commitReadListRecord(record) {
    db.novels.put(record);
    this.props.readListActions.commit(record);
    
    const novels = this.novelListService.update(this.state.novels, record);
    this.setState({novels});
  }

  componentWillReceiveProps(nextProps){
    if (!R.equals(this.props.query, nextProps.query) && !R.isEmpty(nextProps.query)) {
      this.setState({
        novels: List(),
        loading: true,
        page: 0
      });
      this.addNextNovelList(nextProps.query);
    }
  }

  componentDidMount(){
    if (!R.isEmpty(this.props.query)) {
      this.addNextNovelList(this.props.query);
    }
  }

  render() {
    return (
      <NovelListView
        novels={this.state.novels}
        loading={this.state.loading}
        hasMore={this.state.hasMore}
        onLoadMore={this.addNextNovelList.bind(this, this.props.query)}
        onReadButtonTouch={this.commitReadListRecord.bind(this)}
      />
    );
  }
}

export default connect(
  (state) => ({
    readList: state.readList,
  }),
  (dispatch) => ({ 
    readListActions: bindActionCreators(readListActions, dispatch) 
  })
)(NovelList);

