import { expect } from 'chai';

import update from './params';

it('return valid state', () => {
  const initialState =  {};
  const query = {lim: 1};
  const updateSearchQueryAction = {
    type: 'UPDATE_SEARCH_QUERY',
    query: query
  };

  expect(update(initialState, updateSearchQueryAction)).to.eql({query: query});
});
