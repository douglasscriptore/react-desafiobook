import React from 'react'

const Timeline = props => {
  return (
    <div className="wrapper-content content">
      <section className="timeline">
        <ul className="posts">{props.children}</ul>
      </section>
    </div>
  )
}

export default Timeline
