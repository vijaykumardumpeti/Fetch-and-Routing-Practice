import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {key, eachItem} = props
  const {id, imageUrl, topic, avatarUrl, title, author} = eachItem
  return (
    <>
      <Link to={`/blogs/${id}`}>
        <li key={key} className="blog-item-container">
          <div>
            <img className="first-image-url" alt="nsn" src={imageUrl} />
          </div>

          <div className="details-container">
            <p className="topic">{topic}</p>
            <h1 className="title">{title}</h1>
            <div className="profile-container">
              <img className="profile-image" alt="jjj" src={avatarUrl} />
              <p className="author">{author}</p>
            </div>
          </div>
        </li>
      </Link>
    </>
  )
}

export default BlogItem
