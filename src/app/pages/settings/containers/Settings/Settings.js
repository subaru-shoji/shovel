import React from 'react';

import SettingsView from '../../components/views/Settings';

import AppBar from '../../../layouts/AppBar';
import Main from '../../../layouts/Main';

const Settings = () => {
  return (
    <Main header={<AppBar/>}>
      <SettingsView/>
    </Main>
  );
};

export default Settings;
