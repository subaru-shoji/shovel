import React from 'react';
import { List, ListItem } from 'material-ui/List';

export default function NovelList({novels}) {
  const list = novels.map((novel) => 
    (
      <ListItem
        primaryText={novel.title}
        secondaryText={novel.story}
        secondaryTextLines={2}
        key={novel.ncode}
      />
    )
  );
  
  return (
    <List>
      { list }
    </List>
  );
}
