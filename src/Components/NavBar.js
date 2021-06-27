import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import logo from '../assets/RED.png'

const HomePage = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
        <Container className="Navbar">
          <img src={logo} />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <NavDropdown title="Cities" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#">Maharashtra</NavDropdown.Item>
                <NavDropdown.Item href="#">Delhi</NavDropdown.Item>
                <NavDropdown.Item href="#">Goa</NavDropdown.Item>
                <NavDropdown.Item href="#">Karnataka</NavDropdown.Item>
                <NavDropdown.Item href="#">Tamil Nadu</NavDropdown.Item>
                <NavDropdown.Item href="#">Gujarat</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Explore" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#">Plan An Event</NavDropdown.Item>
                <NavDropdown.Item href="#">Corporate Offiste</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">Partner with us</Nav.Link>
              <Nav.Link href="#">Need help?</Nav.Link>
              <Nav.Link href="#">Offers</Nav.Link>
              <Button style={{ padding: "4px 20px", marginLeft: "20px" }} 
              size="lg" variant="outline-dark">Login</Button>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default HomePage;
