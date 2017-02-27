import React from 'react'
import { connect } from 'react-redux';

import './styles.css';

const Comment = ({ comment, username }) => {
  return (
    <div className='commentContainer'>
      <h3>{username}:</h3>
      <h4 className='comment'>{comment}</h4>
    </div>
  )
}

const mapStateToProps = state => (
  { username: state.username }
)

export default connect(mapStateToProps)(Comment)
