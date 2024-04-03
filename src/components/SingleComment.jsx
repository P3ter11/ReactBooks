import { Button, ListGroup } from 'react-bootstrap'
import "./SingleComment.css"

const SingleComment = ({ comment, fetchComments }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + asin,
        {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ2MGE4YmEzM2ZjOTAwMTk2NTgzZGMiLCJpYXQiOjE3MTIwNjU3MjMsImV4cCI6MTcxMzI3NTMyM30.11NJFUNn9w1XBUquKZkPFGkmaKiLR-XAUVjJp-gK-BI',
          },
        }
      )
      if (response.ok) {
        alert('La recensione è stata elimata!')
        fetchComments();
      } else {
        throw new Error('La recensione non è stata eliminata!')
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className='d-flex my-2'>
    <ListGroup.Item className="single-comment" data-testid="single-comment">
      {comment.comment}
      
    </ListGroup.Item>
    <Button
        variant="danger"
        className="ms-2"
        onClick={() => deleteComment(comment._id)}
      >
        Elimina
      </Button>
    </div>
    
  )
}

export default SingleComment
