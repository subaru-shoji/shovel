import React from 'react';
import { connect } from 'react-redux';

import Snackbar from 'material-ui/Snackbar';

import NovelCardDetail from './NovelCardDetail';

import db from '../../../../db';
import { readNovel } from '../../../../actions/listActions';


class NovelCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      isSnackbarOpen: false
    };
  }
  handleExpandChange(expanded) {
    this.setState({expanded: expanded});
  }
  readCard(){
    const data = {ncode: this.props.novel.ncode, isRead: true};
    db.novels.put(data);
    this.props.readNovel(data);
    this.setState({expanded: false, isSnackbarOpen: true});
  }
  unreadCard(){
    const data = {ncode: this.props.novel.ncode, isRead: false};
    db.novels.put(data);
    this.props.readNovel(data);
    this.setState({expanded: false, isSnackbarOpen: false});
  }
  toggleExpand(){
    const isExpanded = this.state.expanded;
    this.setState({expanded: !isExpanded});
  }
  render (){
    return (
      <div>
        <NovelCardDetail
          novel={this.props.novel}
          readCard={this.readCard.bind(this)}
          unreadCard={this.unreadCard.bind(this)}
          toggleExpand={this.toggleExpand.bind(this)}
          expanded={this.state.expanded}
          handleExpandChange={this.handleExpandChange.bind(this)}
        />
        <Snackbar
          open={this.state.isSnackbarOpen}
          message='既読に追加しました'
          action="undo"
          autoHideDuration={4000}
          onActionTouchTap={this.unreadCard.bind(this)}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { readNovel }
)(NovelCard);
