import React from 'react';

import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

import InfiniteScroll from 'redux-infinite-scroll';
import { NAROU_ROOT_URL } from '../constants/constant'


export default function NovelList({novels}) {
  const rightStyle = {'textAlign': 'right'};

  const cards = novels.map((novel) =>
    (
      <Card key={novel.ncode}>
        <CardHeader title={(<a href={`${NAROU_ROOT_URL}/${novel.ncode}`} target="_blank">{novel.title}</a>)} subtitle={novel.writer} />
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
    <InfiniteScroll items={ cards } loader={(<card>loading!!.</card>)} loadMore={() => console.log('loading...')}/>
  );
}
