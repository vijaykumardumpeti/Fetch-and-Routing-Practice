import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Component} from 'react'

import BlogItem from '../BlogItem'

export default class BlogList extends Component {
  state = {
    blogItems: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogItemsList()
  }

  getBlogItemsList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const listOfData = await response.json()

    const updatedData = listOfData.map(eachItem => ({
      id: eachItem.id,
      author: eachItem.author,
      avatarUrl: eachItem.avatar_url,
      imageUrl: eachItem.image_url,
      title: eachItem.title,
      topic: eachItem.topic,
    }))

    this.setState({
      blogItems: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {blogItems, isLoading} = this.state
    console.log(isLoading)
    return (
      <>
        {isLoading ? (
          <div>
            <Loader type="TailSpin" height={50} width={50} color="#00BFFF" />
          </div>
        ) : (
          blogItems.map(eachItem => (
            <BlogItem key={eachItem.id} eachItem={eachItem} />
          ))
        )}
      </>
    )
  }
}
