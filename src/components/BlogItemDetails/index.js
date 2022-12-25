import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Component} from 'react'
import './index.css'

export default class BlogItemDetails extends Component {
  state = {
    blogItemDetails: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    // console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const backendDataObject = await response.json()
    const frontendDataObject = {
      id: backendDataObject.id,
      author: backendDataObject.author,
      avatarUrl: backendDataObject.avatar_url,
      content: backendDataObject.content,
      imageUrl: backendDataObject.image_url,
      title: backendDataObject.title,
      topic: backendDataObject.topic,
    }
    console.log(frontendDataObject)
    this.setState({
      blogItemDetails: frontendDataObject,
      isLoading: false,
    })
  }

  render() {
    const {blogItemDetails, isLoading} = this.state
    const {author, avatarUrl, content, imageUrl, title} = blogItemDetails
    console.log(isLoading)

    return (
      <>
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          <div className="blog-item-details-container">
            <h1>{title}</h1>
            <div className="image-and-profile-container">
              <div className="profile-and-name-container">
                <img className="avatar-image" alt="sj" src={avatarUrl} />
                <p>{author}</p>
              </div>
              <img className="big-image" alt={title} src={imageUrl} />
            </div>
            <p className="content-para">{content}</p>
          </div>
        )}
      </>
    )
  }
}
