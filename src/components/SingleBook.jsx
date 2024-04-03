import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../App'

const SingleBook = ({book, selected, setSelected}) => {
  const navigate = useNavigate()
  const {theme}  = useContext(ThemeContext)

  const handleClick = () => {
    setSelected(book.asin)
  }


  return (

    <Card
      onClick={handleClick}
      className={theme === "light" ? "bg-light text-dark" : "bg-dark text-light"}
      style={{maxHeight: "500px", border: selected === book.asin ? '3px solid red' : '1px solid black' }}
      data-testid="book-card"
    >
      <Card.Img variant="top" src={book.img} style={{objectFit: "cover", aspectRatio: "1/1"}}/>
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        {selected === book.asin && <Button data-testid="info-button" className="w-100 mx-auto my-2" onClick={() => navigate(`/book/${book.asin}`)}>Informazioni</Button>}
      </Card.Body>
    </Card>
  )
}

export default SingleBook