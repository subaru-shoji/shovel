import React from 'react';

import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


export default function NovelList({novels}) {
  const rightStyle = {'text-align': 'right'};
  
  const cards = novels.map((novel) => 
    (
      <Card key={novel.ncode}>
        <CardHeader title={novel.title} subtitle={novel.writer} />
        <CardText>
          {novel.story}
        </CardText>
        <CardActions style={rightStyle}>
          <RaisedButton label="読了" />
        </CardActions>
      </Card>
    )
  );
  
  return (
    <div>
      { cards }
    </div>
  );
}
