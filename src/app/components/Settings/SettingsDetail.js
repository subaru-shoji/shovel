import React from 'react';
import { connect } from 'react-redux';

import {Card, CardActions, CardHeader} from 'material-ui/Card';

import InitializeButton from './InitializeButton';


import db from '../../db';
import { initializeReadListWith } from '../../actions/readListActions';


const SettingsDetail = ({initializeReadListWith}) => {
  const initializeData = () => {
    initializeReadListWith([]);
    db.novels.clear();
  }

  return (
    <Card>
      <CardHeader title="Delete read data."/>
      <CardActions>
        <InitializeButton onClick={initializeData.bind(this)}/>
      </CardActions>
    </Card>
  );
}


export default connect(
  null,
  { initializeReadListWith }
)(SettingsDetail);
