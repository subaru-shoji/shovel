import React from 'react';
import { connect } from 'react-redux';

import { List } from 'immutable';
import { Card, CardActions, CardHeader } from 'material-ui/Card';

import InitializeButton from '../layouts/InitializeButton';


import db from '../../../../libs/db';
import * as readListActions from '../../../../flux/actions/readListActions';


const Index = ({initializeReadListWith}) => {
  const initializeData = () => {
    readListActions.update(List());
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
  {
    readListActions
  }
)(Index);
