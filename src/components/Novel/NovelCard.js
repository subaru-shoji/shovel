import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

import { NAROU_ROOT_URL } from '../../constants/constant'

export default function NovelCard({novel}) {
  return (
    <Card>
      <CardHeader
        title={(
          <a href={`${NAROU_ROOT_URL}/${novel.ncode}`} target="_blank">
            {novel.title}
          </a>
        )}
        subtitle={novel.writer} />
      <CardText>
        {novel.story}
      </CardText>
      <CardActions style={{'textAlign': 'right'}}>
        <RaisedButton label="読了" />
      </CardActions>
    </Card>
  );
}