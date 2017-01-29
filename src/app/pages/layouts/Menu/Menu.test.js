import React from 'react';
import { shallow } from 'enzyme';
import { createMockStore } from 'redux-test-utils';

import Menu from './Menu';

it('renders without crashing', () => {
  const state = {
    isMenuOpen: false
  };
  const context = {
    store: createMockStore(state)
  };
  shallow(<Menu />, {
    context
  });
});
