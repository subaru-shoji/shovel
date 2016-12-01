import React from 'react';
import {connect} from 'react-redux';

import AppBar from 'material-ui/AppBar';

import {openMenu} from '../../actions/menuActions';

const CommonBar = ({title, openMenu, iconElementRight}) => {
  return (<AppBar
    title={title}
    onLeftIconButtonTouchTap={openMenu}
    iconElementRight={iconElementRight}/>)
}

export default connect(null, {openMenu})(CommonBar);
