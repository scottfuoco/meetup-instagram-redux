import React from 'react'
import { connect } from 'react-redux';

import { submitComment, handleCommentInputChange, toggleLike, clearCommentInput } from './actions';

import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

import './style.css';

const dispatchSubmitComment = (dispatch, commentInputText, e) => {
  e.preventDefault();
  dispatch(submitComment(commentInputText));
  dispatch(clearCommentInput());
}

const CommentInputSection = ({ commentInputText, dispatch }) => {
  return (
    <section className="commentBar">
      <Checkbox
        checkedIcon={<ActionFavorite />}
        uncheckedIcon={<ActionFavoriteBorder />}
        style={{ 'width': '18px', 'marginLeft': '20px' }}
        onCheck={() => dispatch(toggleLike())}
      />
      <form onSubmit={e => dispatchSubmitComment(dispatch, commentInputText, e)}>
        <input
          type='text'
          value={commentInputText}
          className="commentInput"
          placeholder="Add a comment..."
          onChange={(e) => dispatch(handleCommentInputChange(e.target.value))}
        />
      </form>
    </section>
  )
}

const mapStateToProps = state => (
   { commentInputText: state.commentInputText }
);

export default connect(mapStateToProps)(CommentInputSection);
