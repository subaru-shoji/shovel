import React from 'react'
import CircularProgress from 'material-ui/CircularProgress';

const Loader = () => {
  return (
    <div style={{
      textAlign: 'center'
    }}>
      <CircularProgress/>
    </div>
    );
};

export default Loader;
