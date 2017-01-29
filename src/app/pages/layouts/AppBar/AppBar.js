import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import MaterialAppBar from 'material-ui/AppBar';

import * as menuActions from '../../../flux/actions/menuActions';


const AppBar = ({title, menuActions, iconElementRight}) => {
  return (<MaterialAppBar
    title={title}
    // onLeftIconButtonTouchTap={openMenu}
    onLeftIconButtonTouchTap={menuActions.openMenu}
    iconElementRight={iconElementRight}/>)
}

export default connect(
  null,
  (dispatch) => ({
    menuActions: bindActionCreators(menuActions, dispatch)
  })
)(AppBar);
