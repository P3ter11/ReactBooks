import { useEffect, useState } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'
import './CommentArea.css'


const CommentArea = ({ asin, selectedTitle }) => {
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const getComments = async () => {
    setIsLoading(true)
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + asin,
        {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ2MGE4YmEzM2ZjOTAwMTk2NTgzZGMiLCJpYXQiOjE3MTIwNjU3MjMsImV4cCI6MTcxMzI3NTMyM30.11NJFUNn9w1XBUquKZkPFGkmaKiLR-XAUVjJp-gK-BI',
          },
        }
      )
      if (response.ok) {
        let comments = await response.json()
        setComments(comments)
        setIsLoading(false)
        setIsError(false)
      } else {
        console.log('error')
        setIsLoading(false)
        setIsError(true)
      }
    } catch (error) {
      console.log(error)
      setIsLoading(false)
      setIsError(true)
    }
  }

  useEffect(() => {
    
    if (asin) {
      getComments()
    }
  }, [asin])

  return (
    <div className="comment-area">
      <h1>{selectedTitle}</h1>
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={asin} fetchComments={getComments}/>
      <CommentList commentsToShow={comments} fetchComments={getComments} />
    </div>
  )
}

export default CommentArea
