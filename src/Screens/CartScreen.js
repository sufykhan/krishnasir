import React from "react";
import {Alert, Col, ListGroup, Row, Image, FormControl, Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomerHeader from "../components/CustomerHeader";
// import img from "../images/cury.jpg"
import im from "../svg/cart.svg"
const CartScreen = () => {
  return (
      <>
      <CustomerHeader/>
      <main className="py-3">

      <Container >
      <div>
      {/* <img src={im} style={{opacity:"0.5"}}/> */}
    <Row >
      <Col md={8}>
        <h2>ORDER LIST</h2>
        {1=== 0 ? (
          <Alert variant="info">
            Your cart is empty <Link to="/customer">Go Back</Link>
          </Alert>
        ) : (
          <ListGroup>
               
                  <ListGroup.Item variant="flush" >
                    <Row>
                      <Col md={2}>
                        <Image src={"/images/cury.jpg"} fluid rounded />
                      </Col>
                      <Col md={3}><Link to={`/`}>Food Name</Link></Col>
                      <Col md={2}>Rs 200</Col>
                      <Col md={2}>
                        <FormControl as="select" value={2} variant="flush" >
                          {Array.from(Array(5).keys()).map((val) => {
                            return (
                              <option key={val + 1} value={val + 1}>
                                {val + 1}
                              </option>
                            );
                          })}
                        </FormControl>
                      </Col>
                      <Col md={2}>
                        <Button type="button" variant="light"><i className="fas fa-trash"></i></Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item variant="flush" >
                    <Row>
                      <Col md={2}>
                        <Image src={"/images/cury.jpg"} fluid rounded />
                      </Col>
                      <Col md={3}><Link to={`/`}>Food Name</Link></Col>
                      <Col md={2}>Rs 200</Col>
                      <Col md={2}>
                        <FormControl as="select" value={2} variant="flush" >
                          {Array.from(Array(5).keys()).map((val) => {
                            return (
                              <option key={val + 1} value={val + 1}>
                                {val + 1}
                              </option>
                            );
                          })}
                        </FormControl>
                      </Col>
                      <Col md={2}>
                        <Button type="button" variant="light"><i className="fas fa-trash"></i></Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
      <Card variant="flush">
          <ListGroup>
              <ListGroup.Item >
                  <h3>Subtotal n Item</h3>
                  <h3>Total Money</h3>
              </ListGroup.Item>
              <ListGroup.Item >
                  <Button type="button" className="btn-block">PROCEED TO CHECKOUT</Button>
              </ListGroup.Item>
          </ListGroup>
      </Card>
      </Col>
      
    </Row>
    </div>
    </Container>
    </main>
    </>
  );
};

export default CartScreen;