import R from 'ramda';

const initialState = {
  query: {}
};

export default (state = initialState, action) => {
  return R.merge(state, (() => {
    switch(action.type) {
      case 'UPDATE_SEARCH_QUERY': {
        return {
          query: action.query,
        };
      }
      default:
        return {};
    }
  })());
};
