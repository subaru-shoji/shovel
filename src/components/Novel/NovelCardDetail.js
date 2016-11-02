import React from 'react';

import { Card, CardActions, CardText } from 'material-ui/Card';

import NovelCardHeader from './NovelCardHeader';
import { grayBack } from '../../styles/style';


export default function NovelCardDetail ({novel, readCard, expanded, handleExpandChange}) {
  return (
    <Card
      expanded={expanded}
      onExpandChange={handleExpandChange}
      style={novel.isRead ? grayBack : {}}
    >
      <CardActions actAsExpander={true}>
        <NovelCardHeader novel={novel} readCard={readCard} isRead={novel.isRead}/>
      </CardActions>
      <CardText expandable={true}>
        {novel.story}
      </CardText>
    </Card>
  );
};

