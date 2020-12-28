import React from "react";
import { Col, Container, Row } from "react-bootstrap";
const FormContainer = ({ children }) => {
  return (
    <Container style={{position:"absolute",top:"40%"}}>
      <Row className="justify-content-md-center">
          {children}
      </Row>
    </Container>
  );
};

export default FormContainer;
