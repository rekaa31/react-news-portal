export const ADD_BOOKMARK = "ADD_BOOKMARK"
export const REMOVE_BOOKMARK = "REMOVE_BOOKMARK"

export const addBookmark = ({ id, title }) => ({
    type: ADD_BOOKMARK,
    payload: {
      id,
      title
    }
});

export const removeBookmark = id => ({
    type: REMOVE_BOOKMARK,
    payload: {
      id
    }
});