import { List } from 'immutable';

const initialState = List();

export default (state = initialState, action) => {
  switch(action.type) {
    case 'INITIALIZE_READ_LIST_WITH':
      return List(action.payload);
    case 'COMMIT_RECORD': {
      const index = state.findIndex(item => item.ncode === action.payload.ncode);
      if (index > -1) {
        return state.update(index, ()=> action.payload);
      } else {
        return state.push(action.payload);
      }
    }
    default:
      return state;
  }
};