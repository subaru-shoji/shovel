import React from 'react';
import { connect } from 'react-redux';

import NovelCardDetail from './NovelCardDetail';

import db from '../../../../db';
import { readNovel } from '../../../../actions/listActions';


class NovelCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }
  handleExpandChange(expanded) {
    this.setState({expanded: expanded});
  }
  readCard(){
    const data = {ncode: this.props.novel.ncode, isRead: true};
    db.novels.put(data);
    this.props.readNovel(data);
    this.setState({expanded: false});
  }
  toggleExpand(){
    const isExpanded = this.state.expanded;
    this.setState({expanded: !isExpanded});
  }
  render (){
    return (
      <NovelCardDetail
        novel={this.props.novel}
        readCard={this.readCard.bind(this)}
        toggleExpand={this.toggleExpand.bind(this)}
        expanded={this.state.expanded}
        handleExpandChange={this.handleExpandChange.bind(this)}
      />
    );
  }
}

export default connect(
  null,
  { readNovel }
)(NovelCard);
