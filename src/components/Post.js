import React from 'react'
import PropTypes from 'prop-types'

import PostHeader from './PostHeader'

const Post = props => (
  <li>
    <PostHeader
      avatar={props.data.avatar}
      name={props.data.name}
      published={props.data.published}
    />

    <div className="post">{props.data.content}</div>
  </li>
)

// a funcao shape deixa você definir o proptypes de um objeto
Post.propTypes = {
  data: PropTypes.shape({
    // devo passar o isRequired dentro do objeto p/ validar cada item
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    published: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired
}

export default Post
