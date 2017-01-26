import { List } from 'immutable';

const initialState = List();

export default (state = initialState, action) => {
  switch(action.type) {
    case 'READ_LIST.UPDATE':
      return state.clear().concat(action.payload);
    case 'READ_LIST.COMMIT':
      const index = state.findIndex(item => item.ncode === action.payload.ncode);
      if (index > -1) {
        return state.update(index, ()=> action.payload);
      } else {
        return state.push(action.payload);
      }
    default:
      return state;
  }
};
