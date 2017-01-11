import React from 'react';

import IconButton from 'material-ui/IconButton';
import SettingsBackupRestore from 'material-ui/svg-icons/action/settings-backup-restore';

const UnreadButton = ({unreadCard}) => {
  return (
    <IconButton onClick={unreadCard}>
      <SettingsBackupRestore />
    </IconButton>
  );
};

export default UnreadButton;
