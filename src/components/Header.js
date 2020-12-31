import React from "react";
import { Navbar,Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {


  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand href="/">Easy Restaurant</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
          
      <img
        src={"/images/mern.png"}
        width="80"
        height="40"
        className="d-inline-block align-top ml-auto"
        alt="MERN stack logo"
      />
    
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
