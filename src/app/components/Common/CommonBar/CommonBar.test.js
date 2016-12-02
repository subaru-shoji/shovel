import React from 'react';
import { shallow } from 'enzyme';
import { createMockStore } from 'redux-test-utils';
import CommonBar from './CommonBar';

it('renders without crashing', () => {
  const context = {store: createMockStore('state')};
  shallow(<CommonBar />, {context});
});