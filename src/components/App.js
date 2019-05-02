import React, { Component, Fragment } from 'react'

import Header from './Header'
import Timeline from './Timeline'
import Post from './Post'

import '../styles/app.css'

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        avatar:
          'https://scontent.fbfh3-1.fna.fbcdn.net/v/t1.0-9/10599352_10152204769992046_846260260862451229_n.jpg?_nc_cat=109&_nc_pt=1&_nc_ht=scontent.fbfh3-1.fna&oh=b476da469d12bcb67b6dbb37da80d375&oe=5D6752B9',
        name: 'Douglas Bento Scriptore',
        published: 'há 3 minutos',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed justo nulla. Aliquam vehicula ante quis rutrum gravida. Sed sagittis tellus at diam convallis cursus id nec mauris. Donec sit amet quam eget purus ullamcorper hendrerit sed in dui. Nunc vitae egestas mauris. Curabitur eget maximus erat. Fusce vitae ullamcorper ante. Suspendisse quis purus in erat mattis facilisis id in magna. Cras sed ante a risus venenatis malesuada. Sed sed nulla ut lectus volutpat tristique.'
      },
      {
        id: 2,
        avatar:
          'https://scontent.fbfh3-2.fna.fbcdn.net/v/t1.0-9/50878348_2056514037762451_7780050888374091776_n.jpg?_nc_cat=105&_nc_pt=1&_nc_ht=scontent.fbfh3-2.fna&oh=2ab19fd9b5e65536b1c3642759909f1c&oe=5D313705',
        name: 'Larissa Almeida',
        published: 'há 1 hora',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed justo nulla. Aliquam vehicula ante quis rutrum gravida. Sed sagittis tellus at diam convallis cursus id nec mauris. Donec sit amet quam eget purus ullamcorper hendrerit sed in dui. Nunc vitae egestas mauris. Curabitur eget maximus erat. Fusce vitae ullamcorper ante'
      }
    ]
  }

  render () {
    return (
      <Fragment>
        <Header />
        <Timeline>
          {this.state.posts &&
            this.state.posts.map(post => <Post key={post.id} data={post} />)}
        </Timeline>
      </Fragment>
    )
  }
}

export default App
