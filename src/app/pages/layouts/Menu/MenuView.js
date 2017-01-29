import React from 'react';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import { browserHistory } from 'react-router'

const MenuView = ({menuState, handleChange}) => {
  const move = (path) => {
    browserHistory.push(path);
    handleChange();
  }

  return (
    <Drawer
    open={menuState.opened}
    onRequestChange={handleChange}
    >
      <MenuItem
    onTouchTap={() => move('/novels/search')}
    >
        Search
      </MenuItem>
      <MenuItem
    onTouchTap={() => move('/settings')}
    >
        Settings
      </MenuItem>
    </Drawer>
    );
};

MenuView.contextTypes = {
  router: React.PropTypes.object
};

export default MenuView;
