import React from 'react'

const PostHeader = props => {
  return (
    <div className="infos">
      <img src={props.avatar} alt={props.name} />
      <div>
        <strong>{props.name}</strong>
        <p>{props.published}</p>
      </div>
    </div>
  )
}

export default PostHeader
