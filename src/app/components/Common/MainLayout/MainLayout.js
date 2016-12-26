import React from 'react';

import { flexContainer } from '../../../styles/style.js';

const content = {
  width: 750
};

const side = {
  flex: 1
};

const MainLayout = ({children}) => {
  return (
    <div style={flexContainer}>
      <div style={side}></div>
      <div style={content}>
        {children}
      </div>
      <div style={side}></div>
    </div>
  );
}

export default MainLayout;
