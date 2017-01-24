import React from 'react';
import { shallow } from 'enzyme';
import { createMockStore } from 'redux-test-utils';
import Header from './Header';

it('renders without crashing', () => {
  const state = {};
  const context = {store: createMockStore(state)};
  shallow(<Header />, {context});
});
