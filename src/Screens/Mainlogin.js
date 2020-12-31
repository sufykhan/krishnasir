import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  Col,
  Container,
  Alert,
  Tab,
  Tabs,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Footer from "../components/Footer";
import FormContainer from "../components/FormContainer";
import Header from "../components/Header";
import { listCustomers } from "../redux/actions/customerActions";
import { listVendors } from "../redux/actions/vendorActions";
import item from "../svg/chef.svg";
const Mainlogin = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const vendorList = useSelector((state) => state.vendorList);
  const { vendors} = vendorList;

  const customerList = useSelector((state) => state.customerList);
  const {customers,loading} = customerList;

  useEffect(() => {
    dispatch(listVendors());
    dispatch(listCustomers());
  }, [dispatch]);

  const [aname, setaName] = useState("");
  const [apassword, setaPassword] = useState("");
  const [cname, setcName] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [message, setMessage] = useState("");

  const submitAdmin = (e) => {
    if(!loading){
    const foundVendor=vendors.find(vendor=>vendor.name===aname)
    if (aname === "Krishna" && apassword === "123") {
      history.push("/admin");
    } else if (foundVendor&& apassword === "123") {
      history.push(`/vendor/${foundVendor.name}`);
    }
     else {
      setMessage("Invalid Credentials for Admin");
      e.preventDefault();
    }
  }
  else{
    e.preventDefault()
  }
  };
  const submitCustomer = (e) => {
    if(!loading){
    const foundCustomer=customers.find(customer=>customer.name===cname)
    if (foundCustomer && cpassword === "123") {
      history.push("/customer");
    } else {
      setMessage("Invalid Credentials for Customer");
      e.preventDefault();
    }
  }
  else{
    e.preventDefault()
  }
  };
  return (
    <>
      <Header />
      <main className="py-3" style={{ background: "rgb(149 185 223)" }}>
        <Container>
          <div>
            {message === "" ? <></> : <Alert variant="danger">{message}</Alert>}
            <img src={item} alt="background chef" style={{ opacity: "0.5" }} />

            <FormContainer>
              <Col xs={12} md={6}>
                <Tabs
                  defaultActiveKey="Admin"
                  id="uncontrolled-tab-example"
                  style={{ fontSize: "24px" }}
                >
                  <Tab eventKey="Admin" title="ADMIN">
                    {/* <h1>Admin / Vendor</h1> */}
                    <Form onSubmit={submitAdmin} style={{ color: "black" }}>
                      <br />
                      <Form.Group controlId="AdminName">
                        <Form.Label>Admin User Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter User Name"
                          value={aname}
                          onChange={(e) => {
                            setaName(e.target.value);
                          }}
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group controlId="Apassword">
                        <Form.Label>Password </Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter password"
                          value={apassword}
                          onChange={(e) => {
                            setaPassword(e.target.value);
                          }}
                        ></Form.Control>
                      </Form.Group>
                      <Button type="submit">Sign In</Button>
                    </Form>
                  </Tab>
                  <Tab eventKey="Vendors" title="VENDOR">
                    <Form onSubmit={submitAdmin} style={{ color: "black" }}>
                      <Form.Group controlId="VendorName">
                        <br />
                        <Form.Label>Vendor User Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter User Name"
                          value={aname}
                          onChange={(e) => {
                            setaName(e.target.value);
                          }}
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group controlId="Apassword">
                        <Form.Label>Password </Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter password"
                          value={apassword}
                          onChange={(e) => {
                            setaPassword(e.target.value);
                          }}
                        ></Form.Control>
                      </Form.Group>
                      <Button type="submit">Sign In</Button>
                    </Form>
                  </Tab>
                </Tabs>
              </Col>
              <Col xs={12} md={6}>
                <h1>Customer</h1>
                <Form onSubmit={submitCustomer} style={{ color: "black" }}>
                  <Form.Group controlId="CustomerName">
                    <Form.Label>Customer User Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter User Name"
                      value={cname}
                      onChange={(e) => {
                        setcName(e.target.value);
                      }}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="Cpassword">
                    <Form.Label>Password </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      value={cpassword}
                      onChange={(e) => {
                        setcPassword(e.target.value);
                      }}
                    ></Form.Control>
                  </Form.Group>
                  <Button type="submit">Sign In</Button>
                </Form>
              </Col>
            </FormContainer>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Mainlogin;
