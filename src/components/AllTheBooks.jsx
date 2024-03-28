import { Col, Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import SingleBook from "./SingleBook";

export const AllTheBooks = ({ searchQuery, selected, handleClick }) => {
  

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
                    selected={selected === book.asin}
                    handleClick={handleClick}
                  />
                </Col>
              );
            })}
      </Row>
    </>
  );
};

export default AllTheBooks;
