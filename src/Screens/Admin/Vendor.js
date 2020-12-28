import React from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  ListGroup,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Vendor = () => {
  var id=123; //id comming from backend;
  var id2=154;
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Link to="/admin" className="btn btn-light my-3">
            Back
          </Link>
          <h3>Vendors List</h3>
          <div className="btn btn-light my-3">Add Vendor</div>
          <ListGroup variant="flush">
            <ListGroup.Item variant="flush">
              <Row>
                <Col md={6}><Link to={`/vendor/${id2}`}>Vendor Name</Link></Col>
                <Col md={3}>Update</Col>
                <Col md={3}>Delete</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item variant="flush">
              <Row>
                <Col md={6}><Link to={`/vendor/${id}`}>Vendor Name</Link></Col>

                <Col md={3}>Update</Col>
                <Col md={3}>Delete</Col>
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
