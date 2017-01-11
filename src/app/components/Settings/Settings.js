import React from 'react';

import SettingsDetail from './SettingsDetail';

import CommonBar from '../Common/CommonBar';
import MainLayout from '../Common/MainLayout';

const Settings = () => {
  return (
    <MainLayout header={<CommonBar/>}>
      <SettingsDetail/>
    </MainLayout>
  );
};

export default Settings;
