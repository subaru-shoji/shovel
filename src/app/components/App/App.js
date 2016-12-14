import React from 'react';
import Menu from '../Menu';

const App = ({children}) => {
  return (
    <div>
      <Menu/>
      {children}
    </div>
  )
};

export default App;
