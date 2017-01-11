import { expect } from 'chai';

import {
  pushRecord,
  initializeDbListWith
} from './readListActions';

it('return valid action', () => {
  const novel = {
    ncode: 'n00001',
    write: 'test'
  };

  expect(pushRecord(novel)).to.eql({
    type: 'PUSH_RECORD',
    payload: novel
  })


  const narouList = [
    novel
  ];

  expect(initializeDbListWith(narouList)).to.eql({
    type: 'INITIALIZE_DB_LIST_WITH',
    payload: narouList
  });
});


