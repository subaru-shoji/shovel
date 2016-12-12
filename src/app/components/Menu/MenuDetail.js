import React from 'react';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import { browserHistory } from 'react-router'

const Menu = ({isMenuOpen, handleChange}) => {
  return (
    <Drawer
      open={isMenuOpen}
      onRequestChange={handleChange}
      docked={false}
    >
      <MenuItem
        onTouchTap={()=> browserHistory.push('/')}
      >
        Main
      </MenuItem>
      <MenuItem
        onTouchTap={()=> browserHistory.push('/settings')}
      >
        Settings
      </MenuItem>
    </Drawer>
  );
};

Menu.contextTypes = {
  router: React.PropTypes.object
};

export default Menu;