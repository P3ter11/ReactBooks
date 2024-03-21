import { useState } from 'react'
import { Col, Row, Form } from 'react-bootstrap'
import fantasy from '../data/fantasy.json'
import SingleBook from './SingleBook'

const AllTheBooks = () => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={4} className="text-center">
          <Form.Group>
            <Form.Control
              type="search"
              placeholder="Cerca un libro"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
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
