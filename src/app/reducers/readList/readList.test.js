import { expect } from 'chai';

import update from './readList';

it('return valid state', () => {
  const initialState = [];

  const novel = {
    ncode: 'N0001',
    writer: 'test'
  };


  const initializeDbListWithAction = {
    type: 'INITIALIZE_DB_LIST_WITH',
    payload: [novel]
  };

  expect(update(initialState, initializeDbListWithAction)).to.eql([novel]);

  const pushDataAction = {
    type: 'PUSH_DATA',
    payload: novel
  };

  expect(update([], pushDataAction)).to.eql([novel]);
});
