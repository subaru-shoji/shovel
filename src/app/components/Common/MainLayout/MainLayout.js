import React from 'react';

import Menu from '../Menu';
import { flexContainer } from '../../styles/style.js';

const content = {
  width: 750
};

const side = {
  flex: 1
};

const MainLayout = ({mainComponent}) => {
  return (
    <div style={flexContainer}>
      <div style={side}>
        <Menu isMenuOpen={true}/>
      </div>
      <div style={content}>
        {mainComponent}
      </div>
      <div style={side}></div>
    </div>
  );
}

export default MainLayout;