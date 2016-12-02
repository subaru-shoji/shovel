import React from 'react';
import { shallow } from 'enzyme';
import { createMockStore } from 'redux-test-utils';

import NovelList from './NovelList';

it('renders without crashing', () => {
  const state = {
    lists: {
      merged: [],
    },
    params: {
      query: {}
    }
  };
  const context = {store: createMockStore(state)};
  shallow(<NovelList />, {context});
});
