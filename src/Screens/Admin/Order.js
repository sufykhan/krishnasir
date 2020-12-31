import React from "react";
import {  Container, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Order = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const total = () => {
    let sum = 0;
    cartItems.map(({ pri, qty }) => (sum = sum + Number(pri * qty)));
    return sum;
  };
  const id = 1729;
  return (
    <>
      <Header />
      <main className="py-3" style={{background:"#c6e7dc"}}>
        <Container>
          <Link to="/admin" className="btn btn-light my-3">
            Back
          </Link>
          <h3>Orders List</h3>

          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>OrderId</th>
                <th>Customer Name</th>
                <th>Total Amount</th>
                <th>Order Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
             <th>{id}</th>
             <th><Link to={`/admin/order/${id}`}>Sai</Link></th>
             <th>Rs{total()}</th>
             <th>31-12-2020</th>
              </tr>
            </tbody>
          </Table>

        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Order;
