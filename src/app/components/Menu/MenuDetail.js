import React from 'react';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const Menu = ({isMenuOpen, handleChange}) => {
  return (
    <Drawer
      open={isMenuOpen}
      onRequestChange={handleChange}
      docked={false}
    >
      <MenuItem
        onTouchTap={()=> window.location.reload()}
      >
        Main
      </MenuItem>
    </Drawer>
  );
};

export default Menu;