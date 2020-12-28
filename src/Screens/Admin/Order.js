import React from "react";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Vendor = () => {
  const id = 1729;
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Link to="/admin" className="btn btn-light my-3">
            Back
          </Link>
          <h3>Orders List</h3>

          <ListGroup variant="flush">
            <ListGroup.Item variant="flush">
              <Row>
                <Col md={3}>
                  {" "}
                  <Link to={`/admin/order/${id}`}>
                    <h6>OrderId</h6>
                  </Link>
                </Col>
                <Col md={3}>Customer Name</Col>
                <Col md={3}>Order Amount</Col>
                <Col md={3}>Order Date</Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Vendor;
