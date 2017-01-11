import React from 'react';
import { shallow } from 'enzyme';
import { createMockStore } from 'redux-test-utils';

import Novels from './Novels';

it('renders without crashing', () => {
  const state = {};
  const context = {store: createMockStore(state)};
  const location = {query: ''};
  shallow(<Novels location={location}/>, {context});
});
