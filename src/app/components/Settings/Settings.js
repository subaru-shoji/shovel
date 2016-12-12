import React from 'react';

import SettingsDetail from './SettingsDetail';

import CommonBar from '../Common/CommonBar';
import MainLayout from '../Common/MainLayout';

const Settings = () => {
  const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh'
  };

  const header = {
    flex: '0 0 auto'
  };

  const content = {
    flex: '1 1 auto',
    overflowY: 'auto',
  }

  return (
    <div style={containerStyle}>
      <header style={header}>
        <CommonBar/>
      </header>
      <div style={content}>
        <MainLayout mainComponent={(<SettingsDetail/>)} />
      </div>
    </div>
  );
};

export default Settings;