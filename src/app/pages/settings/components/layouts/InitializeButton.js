import React from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class InitializeButton extends React.Component {
  state = {
    open: false,
  };
  handleOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const actions = [
      <FlatButton
      label="Cancel"
      primary={true}
      onTouchTap={this.handleClose}
      />,
      <FlatButton
      label="Yes"
      primary={true}
      onTouchTap={() => {
        this.props.onClick();
        this.handleClose();
      }}
      />
    ];

    const style = {
      margin: 12,
    };

    return (
      <span>
        <RaisedButton
      label="OK"
      secondary={true}
      onTouchTap={this.handleOpen}
      style={style}
      />
        <Dialog
      title="初期化してよろしいですか？"
      actions={actions}
      modal={false}
      open={this.state.open}
      onRequestClose={this.handleClose}
      >
          既読データが全て消去されます。よろしいでしょうか？
        </Dialog>
      </span>
      );
  }
}

export default InitializeButton;
