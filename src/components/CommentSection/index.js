import React from 'react'
import { connect } from 'react-redux'
import { CardText } from 'material-ui/Card'

import Comment from '../Comment';
import Likes from '../Likes';



const CommentSection = ({ post, username }) => {
  return (
    <CardText>
      <Likes post={post} />
      <div>
        {
          post.comments.map((comment, i) => <Comment key={i} comment={comment} /> )
        }
      </div>
    </CardText>
  )
}

const mapStateToProps = state  => ({
    post: state.post,
    username: state.username
})

export default connect(mapStateToProps)(CommentSection);