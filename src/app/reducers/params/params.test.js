import { expect } from 'chai';

import update from './params';

it('return valid state', () => {
  const query = {lim: 1};
  const updateSearchQueryAction = {
    type: 'UPDATE_SEARCH_QUERY',
    query: query
  };

  expect(update(updateSearchQueryAction)).toEqual({query: query});
});
