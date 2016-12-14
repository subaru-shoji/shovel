import React from 'react';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import { browserHistory } from 'react-router'

const Menu = ({menuState, handleChange}) => {
  const move = (path) => {
    browserHistory.push(path);
    handleChange();
  }

  return (
    <Drawer
      open={menuState.opened}
      docked={menuState.docked}
      onRequestChange={handleChange}
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