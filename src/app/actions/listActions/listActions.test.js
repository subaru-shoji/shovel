import {
  updateSearchQuery,
  initializeNarouList,
  addNarouList,
  readNovel,
  initializeDbListWith
} from './listActions';

it('return valid action', () => {
  const query = {lim: 1};
  expect(updateSearchQuery()).toEqual({
    type: 'UPDATE_SEARCH_QUERY',
    query: query
  });

  expect(initializeNarouList()).toEqual({
    type: 'INITIALIZE_NAROU_LIST'
  });

  const novel = {
    ncode: 'n00001',
    write: 'test'
  };

  expect(readNovel(novel)).toEqual({
    type: 'READ_NOVEL',
    payload: novel
  })


  const narouList = [
    novel
  ];

  expect(addNarouList(narouList)).toEqual({
    type: 'ADD_NAROU_LIST',
    payload: narouList
  });

  expect(initializeDbListWith(narouList)).toEqual({
    type: 'INITIALIZE_DB_LIST_WITH',
    payload: narouList
  });  
});


