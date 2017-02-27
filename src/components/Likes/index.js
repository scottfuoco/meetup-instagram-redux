import React from 'react'

import './styles.css';

const Likes = ({post}) => {
  return (
    <div className='likes'>
      Likes: {post.likes}
    </div>
  )
}

export default Likes