import React from 'react';

import { Card, CardHeader, CardText } from 'material-ui/Card';

import ReadButton from './ReadButton';
import TitleLink from './TitleLink';


import { grayBack, rightPadding, flexContainer,pointer } from '../../../styles/style';


export default function NovelCardDetail ({novel, readCard, toggleExpand, expanded, handleExpandChange}) {
  const headerStyle = Object.assign({}, rightPadding, flexContainer, pointer, {alignItems: 'center'});
  const cardStyle = Object.assign({width: '100%'}, (novel.isRead ? grayBack : {}));

  return (
    <Card
      expanded={expanded}
      onExpandChange={handleExpandChange}
      style={cardStyle}
    >
      <div style={headerStyle} >
        <CardHeader
          title={<TitleLink novel={novel} />}
          subtitle={novel.writer}
          onClick={toggleExpand}
          style={{flexGrow: 2}}
        />
        {novel.isRead ? '' : <ReadButton readCard={readCard} style={{marginRight: 16}} />}
      </div>
      <CardText expandable={true}>
        {novel.story}
      </CardText>
    </Card>
  );
};

