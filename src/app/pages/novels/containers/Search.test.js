import React from 'react';
import { shallow } from 'enzyme';
import { createMockStore } from 'redux-test-utils';

import Search from './Search';

it('renders without crashing', () => {
  const state = {};
  const context = {
    store: createMockStore(state)
  };
  const location = {
    query: ''
  };
  shallow(<Search location={location}/>, {
    context
  });
});
