import React from 'react';
import {connect} from 'react-redux';

import MaterialAppBar from 'material-ui/AppBar';

import {openMenu} from '../../../flux/reducers/menu';

const AppBar = ({title, openMenu, iconElementRight}) => {
  return (<MaterialAppBar
    title={title}
    onLeftIconButtonTouchTap={openMenu}
    iconElementRight={iconElementRight}/>)
}

export default connect(null, {openMenu})(AppBar);
