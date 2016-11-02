import React from 'react';

import IconButton from 'material-ui/IconButton';
import ActionDone from 'material-ui/svg-icons/action/done';
import { CardHeader } from 'material-ui/Card';

import { NAROU_ROOT_URL } from '../../constants/constant'

export default function NovelCardHeader ({novel, readCard, isRead}) {
  const readButton = (
    <IconButton onClick={readCard}>
      <ActionDone />
    </IconButton>
  );
  const title = (
    <a
      href={`${NAROU_ROOT_URL}/${novel.ncode}`}
      target="_blank"
      style={{textDecoration: 'none'}}
    >
      {novel.title}
    </a>
  );

  const flexContainer = {display: 'flex'};
  const flexRight = {flex: 'auto', textAlign: 'right'};

  return (
    <CardHeader
      title={title}
      subtitle={novel.writer}
      children={(
        <div style={flexRight}>
          {isRead ? '' : readButton}
        </div>
      )}
      style={flexContainer}
    />
  );
}