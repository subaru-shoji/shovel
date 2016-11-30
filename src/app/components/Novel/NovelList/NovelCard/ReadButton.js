import React from 'react';

import IconButton from 'material-ui/IconButton';
import ActionDone from 'material-ui/svg-icons/action/done';

export default ReadButton = ({readCard}) => {
  return (
    <IconButton onClick={readCard}>
      <ActionDone />
    </IconButton>
  );
};
