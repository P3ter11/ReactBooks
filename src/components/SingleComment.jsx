import { Button, ListGroup } from 'react-bootstrap'

const SingleComment = ({ comment, fetchComments }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + asin,
        {
          method: 'DELETE',
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ2MGE4YmEzM2ZjOTAwMTk2NTgzZGMiLCJpYXQiOjE3MTA2MDI3NjUsImV4cCI6MTcxMTgxMjM2NX0.yBQl59etN21AW2nSIeKWaI307gdQ3giLEXo_vtXBZHw',
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
    <ListGroup.Item>
      {comment.comment}
      <Button
        variant="danger"
        className="ms-2"
        onClick={() => deleteComment(comment._id)}
      >
        Elimina
      </Button>
    </ListGroup.Item>
  )
}

export default SingleComment
