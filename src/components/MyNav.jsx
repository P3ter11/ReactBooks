import React, { useContext} from "react";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import { ThemeContext } from "../App";


const MyNav = ({searchQuery, setSearchQuery}) => {

  const {theme, toggleTheme} = useContext(ThemeContext);

  

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary mb-3"
        bg="dark"
        data-bs-theme={theme}
      >
        <Container fluid>
          <Navbar.Brand href="#">EpiBooks</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Browse</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Form.Group>
            <Form.Control
              type="search"
              placeholder="Cerca un libro"
              value={searchQuery}
              onChange={(e) => {setSearchQuery(e.target.value)}}
            />
          </Form.Group>
          
            <Button variant = "primary" className="mx-3" onClick={toggleTheme}>
              Change Theme
            </Button>
          
          
        </Container>
      </Navbar>
    </>
  );
};

export default MyNav;
