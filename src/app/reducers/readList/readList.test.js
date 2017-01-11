import { expect } from 'chai';

import update from './readList';

it('return valid state', () => {
  const initialState = [];

  const novel = {
    ncode: 'N0001',
    writer: 'test'
  };


  const initializeReadListWithAction = {
    type: 'INITIALIZE_READ_LIST_WITH',
    payload: [novel]
  };

  expect(update(initialState, initializeReadListWithAction)).to.eql([novel]);

  const pushDataAction = {
    type: 'COMMIT_RECORD',
    payload: novel
  };

  expect(update([], pushDataAction)).to.eql([novel]);
});
