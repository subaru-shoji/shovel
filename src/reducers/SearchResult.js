import R from 'ramda';

const initialState = {
  novels: [],
  params: {}
};

export default function SearchResult(state = initialState, action) {
  return R.merge(state, (() => {
    switch(action.type) {
      case 'UPDATE_SEARCH_RESULT': {
        return {
          novels: action.novels,
          params: action.params
        };
      }
      default:
        return {};
    }
  })());
};
