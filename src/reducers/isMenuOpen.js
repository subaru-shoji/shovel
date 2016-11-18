const initialState = false;

export default function update(state = initialState, action) {
  switch(action.type) {
    case 'OPEN_MENU': {
      return true;
    }
    case 'CLOSE_MENU': {
      return false;
    }
    default:
      return false;
  }
}