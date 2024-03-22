import { Col, Row, Form } from 'react-bootstrap'
import fantasy from '../data/fantasy.json'
import SingleBook from './SingleBook'


const AllTheBooks = ({searchQuery}) => {
  

  return (
    <>
      <Row className="g-2 mt-3">
        {fantasy
          .filter((b) => b.title.toLowerCase().includes(searchQuery))
          .map((book) => {
            return (
              <Col xs={12} md={4} key={book.asin}>
                <SingleBook book={book} />
              </Col>
            )
          })}
      </Row>
    </>
  )
}

export default AllTheBooks
