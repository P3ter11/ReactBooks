import { Col, Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import SingleBook from "./SingleBook";
import { useState } from "react";

export const AllTheBooks = ({ searchQuery }) => {
  const [selected, setSelected] = useState(false);
  
  return (
    <>
      <Row className="g-3 my-2">
          {fantasy
            .filter((b) => b.title.toLowerCase().includes(searchQuery))
            .map((book) => {
              return (                
                <Col xs={3} key={book.asin}>
                  <SingleBook
                    book={book}
                    selected={selected}
                    setSelected = {setSelected}
                  />
                </Col>
              );
            })}
      </Row>
    </>
  );
};

export default AllTheBooks;
