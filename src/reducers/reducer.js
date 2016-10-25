import R from 'ramda';

const initialState = {
  searchResult: {
    novels: [],
    params: {}
  }
}

export default function reducer(state = initialState, action) {
  return R.merge(state, createState(state, action));
}

function createState(state, action) {
  switch(action.type) {
  case 'UPDATE_SEARCH_RESULT': {
    return {
      searchResult: {
        novels: action.searchResult.novels,
        params: action.searchResult.params
      }
    };
  }
  default:
    return {}
  }
}