import './index.css'

const BlogItem = props => {
  const {key, eachItem} = props
  const {imageUrl, topic, avatarUrl, title, author} = eachItem
  return (
    <>
      <li key={key} className="blog-item-container">
        <div>
          <img className="first-image-url" alt="nsn" src={imageUrl} />
        </div>

        <div className="details-container">
          <p>{topic}</p>
          <h1>{title}</h1>
          <div className="profile-container">
            <img className="profile-image" alt="jjj" src={avatarUrl} />
            <p>{author}</p>
          </div>
        </div>
      </li>
    </>
  )
}

export default BlogItem
