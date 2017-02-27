const postsReducer = (state = {comments: [], liked: false, likes:15, datePosted:'Feb 26th 2017' }, action) => {
  switch (action.type) {
    case 'TOGGLE_LIKE':
      const addLikes = state.likes + (!state.liked ? 1 : -1);
      return { ...state, liked: !state.liked, likes: addLikes };
    case 'SUBMIT_COMMENT':
      return { ...state, comments: [...state.comments, action.payload.comment] }
    default:
      return state;
  }
};

export default postsReducer;