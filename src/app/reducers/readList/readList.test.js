import { expect } from 'chai';
import { List } from 'immutable';

import update from './readList';

it('return valid state', () => {
  const initialState = List();

  const novel = {
    ncode: 'N0001',
    writer: 'test'
  };


  const initializeReadListWithAction = {
    type: 'INITIALIZE_READ_LIST_WITH',
    payload: List([novel])
  };

  expect(update(initialState, initializeReadListWithAction)).to.eql(List([novel]));

  const pushDataAction = {
    type: 'COMMIT_RECORD',
    payload: novel
  };

  expect(update(initialState, pushDataAction).toArray()).to.eql(List([novel]).toArray());
});
