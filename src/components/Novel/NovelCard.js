import React from 'react';
import { connect } from 'react-redux';

import NovelCardDetail from './NovelCardDetail';

import { readNovel } from '../../actions/action';


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
    this.props.readNovel({ncode: this.props.novel.ncode, isRead: true});
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
