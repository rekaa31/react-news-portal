import { ADD_BOOKMARK, REMOVE_BOOKMARK } from '../actions/NewsActions';

export default function newsReducer(state = [], action) {
  switch (action.type) {
    case ADD_BOOKMARK:
      return [...state, action.payload];
    case REMOVE_BOOKMARK:
      return state.filter(bookmark => bookmark.id !== action.payload.id);;
    default:
      return state;
  }
}