import React from 'react';
import { shallow } from 'enzyme';
import { createMockStore } from 'redux-test-utils';
import NovelCard from './NovelCard';

it('renders without crashing', () => {
  const state = {};
  const context = {
    store: createMockStore(state)
  };
  shallow(<NovelCard novel={{
    test: 'test'
  }}/>, {
    context
  });
});
