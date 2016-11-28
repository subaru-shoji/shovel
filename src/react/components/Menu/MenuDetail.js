import React from 'react';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default function Menu ({isMenuOpen, handleChange}) {
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
}