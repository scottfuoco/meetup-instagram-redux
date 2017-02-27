const commentInputTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'HANDLE_COMMENT_INPUT_CHANGE':
      const updateInputState = action.payload.commentInputText;
      return updateInputState
    case 'CLEAR_COMMENT_INPUT':
      return '';
    default:
      return state;
  }
};

export default commentInputTextReducer;