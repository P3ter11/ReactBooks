import { useState } from 'react'
import { Card } from 'react-bootstrap'

const SingleBook = ({ book, selected, handleClick }) => {

  return (
    <>
      <Card
        onClick={() => handleClick(book.asin)}
        style={{ border: selected ? '3px solid red' : 'none' }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  )
}

export default SingleBook
