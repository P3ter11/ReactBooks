import { Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const SingleBook = ({ book, selected}) => {
  const navigate = useNavigate();

  return (
    <Link style = {{textDecoration: "none"}} to={`/book/${book.asin}`}>
      <Card
        style={{maxHeight: "400px", border: selected ? '3px solid red' : '1px solid black' }}
      >
        <Card.Img variant="top" src={book.img} style={{objectFit: "cover", aspectRatio: "1/1"}}/>
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default SingleBook
