import React from 'react';
import { flexContainer } from '../../styles';
  
const content = {
  width: 750
};

const side = {
  flex: 1
};

export default MainLayout = ({mainComponent}) => {
  return (
    <div style={flexContainer}>
      <div style={side}>
        <Menu isMenuOpen={true}/>
      </div>
      <div style={content}>
        {{ MainComponent }}
      </div>
      <div style={side}></div>
    </div>
  );
}

