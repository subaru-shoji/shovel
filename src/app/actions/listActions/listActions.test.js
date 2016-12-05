import { expect } from 'chai';

import {
  updateSearchQuery,
  initializeNarouList,
  addNarouList,
  readNovel,
  initializeDbListWith
} from './listActions';

it('return valid action', () => {
  const query = {lim: 1};
  expect(updateSearchQuery(query)).to.eql({
    type: 'UPDATE_SEARCH_QUERY',
    query: query
  });

  expect(initializeNarouList()).to.eql({
    type: 'INITIALIZE_NAROU_LIST'
  });

  const novel = {
    ncode: 'n00001',
    write: 'test'
  };

  expect(readNovel(novel)).to.eql({
    type: 'READ_NOVEL',
    payload: novel
  })


  const narouList = [
    novel
  ];

  expect(addNarouList(narouList)).to.eql({
    type: 'ADD_NAROU_LIST',
    payload: narouList
  });

  expect(initializeDbListWith(narouList)).to.eql({
    type: 'INITIALIZE_DB_LIST_WITH',
    payload: narouList
  });
});


