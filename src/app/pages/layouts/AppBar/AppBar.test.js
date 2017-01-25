import React from 'react';
import { shallow } from 'enzyme';
import { createMockStore } from 'redux-test-utils';
import AppBar from './AppBar';

it('renders without crashing', () => {
  const state = {};
  const context = {store: createMockStore(state)};
  shallow(<AppBar />, {context});
});
