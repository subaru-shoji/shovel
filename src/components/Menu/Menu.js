import React from 'react';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default function Menu ({isMenuOpen}) {
  return (
    <Drawer
      open={isMenuOpen}
      docked={false}
    >
      <MenuItem>Main</MenuItem>
    </Drawer>
  );
}