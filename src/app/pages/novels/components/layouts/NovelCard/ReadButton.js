import React from 'react';

import IconButton from 'material-ui/IconButton';
import ActionDone from 'material-ui/svg-icons/action/done';

const ReadButton = ({readCard}) => {
  return (
    <IconButton onClick={readCard}>
      <ActionDone />
    </IconButton>
    );
};

export default ReadButton;
