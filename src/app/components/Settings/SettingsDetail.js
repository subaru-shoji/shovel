import React from 'react';
import { connect } from 'react-redux';

import InitializeButton from './InitializeButton';


import db from '../../db';
import { initializeDbListWith } from '../../actions/listActions';


const SettingsDetail = ({initializeDbListWith}) => {
  const initializeData = () => {
    initializeDbListWith([]);
    db.novels.clear();
  }

  return (
    <div>
      <p>Delete read data.</p>
      <InitializeButton onClick={initializeData.bind(this)}/>
    </div>
  );
}


export default connect(
  null,
  { initializeDbListWith }
)(SettingsDetail);
