import { Col, Row} from 'react-bootstrap'
import fantasy from '../data/fantasy.json'
import SingleBook from './SingleBook'
import CommentArea from './CommentArea'
import { useState } from 'react'


const AllTheBooks = ({searchQuery}) => {
  const [selected, setSelected] = useState(false);

  const  handleClick = (book)=>{
    setSelected(book);
  }

  return (
    <>
      <Row className="g-2 mt-3">
        <Col className = "d-flex flex-wrap justify-content-evenly">
        {fantasy
          .filter((b) => b.title.toLowerCase().includes(searchQuery))
          .map((book) => {
            return (
              <Col xs = {5} key={book.asin}>
                <SingleBook book={book} selected={selected === book.asin} handleClick={handleClick} />
              </Col>

  
            )
          })}
          </Col>
          <Col xs = {6}>
            <CommentArea handleClick = {handleClick} {...selected ? {selected} : null}/>
          </Col>
      </Row>
    </>
  )
}

export default AllTheBooks
