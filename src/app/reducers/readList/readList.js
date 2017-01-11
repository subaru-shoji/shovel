import R from 'ramda';

const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case 'INITIALIZE_READ_LIST_WITH':
      return action.payload
    case 'PUSH_RECORD': {
      return state.concat(action.payload);
    }
    default:
      return [];
  }
};