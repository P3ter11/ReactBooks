import { useEffect, useState } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'

const CommentArea = ({ asin, title }) => {
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
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ2MGE4YmEzM2ZjOTAwMTk2NTgzZGMiLCJpYXQiOjE3MTA2MDI3NjUsImV4cCI6MTcxMTgxMjM2NX0.yBQl59etN21AW2nSIeKWaI307gdQ3giLEXo_vtXBZHw',
          },
        }
      )
      console.log(response)
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
    <div className="text-center">
      <h1>{title}</h1>
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={asin} />
      <CommentList commentsToShow={comments} />
    </div>
  )
}

export default CommentArea
