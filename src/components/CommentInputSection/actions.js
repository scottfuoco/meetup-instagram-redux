export const toggleLike = () => ({
  type: 'TOGGLE_LIKE',
});

export const clearCommentInput = () => ({
  type: 'CLEAR_COMMENT_INPUT',
});

export const submitComment = commentInputText => ({
  type: 'SUBMIT_COMMENT',
  payload: {
    comment: commentInputText
  }
})

export const handleCommentInputChange = commentInputText => ({
  type: 'HANDLE_COMMENT_INPUT_CHANGE',
  payload: {
    commentInputText
  }
})