import React, { useState } from 'react'
import {Button, Form,Col, Container, Alert} from "react-bootstrap"
import { useHistory } from 'react-router-dom'
import Footer from '../components/Footer'
import FormContainer from "../components/FormContainer"
import Header from '../components/Header'
import item from "../svg/chef.svg"
const Mainlogin = () => {
    const history=useHistory()
    
    const [aname,setaName]=useState("");
    const [apassword,setaPassword]=useState("")
    const [cname,setcName]=useState("");
    const [cpassword,setcPassword]=useState("")
    const [message,setMessage]=useState("")
    const submitAdmin=(e)=>{
      if(aname==="Krishna" && apassword==="123")
      {
        history.push("/admin")
      }
      else{
        setMessage("Invalid Credentials for Admin")
        e.preventDefault()
      }
    }
    const submitCustomer=(e)=>{
      if(cname==="Example" && cpassword==="123" )
      {
        history.push("/customer")
      }
      else{
        setMessage("Invalid Credentials for Customer")
        e.preventDefault()
      }
    }
    return (
        <>
        <Header/>
        <main className="py-3">
        <Container>
        <div>
        {message===""?<></>:<Alert variant="danger">{message}</Alert>}
            <img src={item} style={{opacity:"0.5"}}/>
            
            <FormContainer >
            <Col xs={12} md={6}>
      <h1>Admin</h1>
      <Form onSubmit={submitAdmin}>
        <Form.Group controlId="AdminName">
          <Form.Label>Admin UserName</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter UserName"
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
</Col>
 <Col xs={12} md={6}>
      <h1>Customer</h1>
      <Form onSubmit={submitCustomer}>
        <Form.Group controlId="CustomerName">
          <Form.Label>Customer UserName</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter UserName"
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
        <Footer/>
        </>
    )
}

export default Mainlogin
