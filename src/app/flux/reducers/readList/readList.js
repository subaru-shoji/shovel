import { List } from 'immutable';

const initialState = List();

export default (state = initialState, action) => {
  switch(action.type) {
    case 'READ_LIST.UPDATE':
      return List(action.payload);
    default:
      return state;
  }
};
