import React from 'react';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import { browserHistory } from 'react-router'

const Menu = ({isMenuOpen, handleChange}) => {
  const move = (path) => {
    browserHistory.push(path);
    handleChange();
  }

  return (
    <Drawer
      open={isMenuOpen}
      onRequestChange={handleChange}
      docked={false}
    >
      <MenuItem
        onTouchTap={()=> move('/')}
      >
        Main
      </MenuItem>
      <MenuItem
        onTouchTap={()=> move('/settings')}
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