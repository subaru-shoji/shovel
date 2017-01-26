import React from 'react';
import Snackbar from 'material-ui/Snackbar';

import NovelCardView from './NovelCardView';


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
    this.props.updateMethod(data);
    this.setState({expanded: false, isSnackbarOpen: true});
  }
  unreadCard(){
    const data = {ncode: this.props.novel.ncode, isRead: false};
    this.props.updateMethod(data);
    this.setState({expanded: false, isSnackbarOpen: false});
  }
  toggleExpand(){
    const isExpanded = this.state.expanded;
    this.setState({expanded: !isExpanded});
  }
  handleClose(){
    this.setState({isSnackbarOpen: false});
  }
  render (){
    return (
      <div>
        <NovelCardView
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
          onRequestClose={this.handleClose.bind(this)}
        />
      </div>
    );
  }
}

export default NovelCard;
