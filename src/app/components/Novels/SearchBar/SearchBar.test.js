import React from 'react';
import { shallow } from 'enzyme';
import { createMockStore } from 'redux-test-utils';

import SearchBar from './SearchBar';

it('renders without crashing', () => {
  const state = {};
  const context = {store: createMockStore(state)};
  shallow(<SearchBar />, {context});
});
