import React from 'react';

import { flexContainer } from '../../../styles';

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
};

const headerStyle = {
  flex: '0 0 auto'
};

const mainStyle = {
  padding: '1em 0 0 0',
  flex: '1 1 auto',
  overflowY: 'auto',
}

const content = {
  width: 750
};

const side = {
  flex: 1
};

const Main = ({header, children}) => {
  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        { header }
      </header>
      <div style={mainStyle}>
        <div style={flexContainer}>
          <div style={side}></div>
          <div style={content}>
            { children }
          </div>
          <div style={side}></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
