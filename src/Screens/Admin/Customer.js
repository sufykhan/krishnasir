import React from 'react'
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Customer = () => {
    return (
        <>
        <Header/>
        <main className="py-3">
        <Container>
        <Link to="/admin" className="btn btn-light my-3">Back</Link>
        <h3>Customers List</h3>
    
        <ListGroup variant="flush">
            <ListGroup.Item variant="flush" >
                    <Row>
                      <Col md={4}>
                       Customer Name
                      </Col>
                      <Col md={2}>Customer Id</Col>
                      <Col md={2}>Accept</Col>
                      <Col md={2}>
                        Delete
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item variant="flush" >
                    <Row>
                      <Col md={4}>
                       Customer Name
                      </Col>
                      <Col md={2}>Customer Id</Col>
                      <Col md={2}>Accept</Col>
                      <Col md={2}>
                        Delete
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item variant="flush" >
                    <Row>
                      <Col md={4}>
                       Customer Name
                      </Col>
                      <Col md={2}>Customer Id</Col>
                      <Col md={2}>Accept</Col>
                      <Col md={2}>
                        Delete
                      </Col>
                    </Row>
                  </ListGroup.Item>    
        </ListGroup>
        </Container>
        </main>
        <Footer/>
        </>
       
    )
}

export default Customer
