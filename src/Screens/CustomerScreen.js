import React,{useState} from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import CustomerHeader from "../components/CustomerHeader";
import DishItem from "./Customer/DishItem";
import productData from "../productData"
const CustomerScreen = () => {
  // const [search,setSearch]=useState("")
  const [searchItem,setItem]=useState("Select the Dish")
  const [vendor,setVendor]=useState("Filter with Vendors")
  //console.log(vendor)
   const filterItem=()=>{
    const filterData=productData.filter((product)=>(  product.name.toLowerCase().includes(searchItem.toLowerCase()) ||searchItem==="Select the Dish" ))
     .filter((product)=>(product.vendors.find(e=>e===vendor) || vendor==="Filter with Vendors"));
      console.log(filterData)
    const data= filterData.map((product,index)=>{
      return (<DishItem product={product}/>)
    })
    return data;
   }

  return (
    <>
      <CustomerHeader />
      <main className="py-3">
        <Container>
          <Row>
            <Col md={7}>
              {/* <Form.Control type="text" placeholder="Search Dishes" onChange={(e)=>setSearch(e.target.value)}/> */}
              <Form.Control as="select" value={searchItem} defaultValue="Choose..." onChange={(e)=>setItem(e.target.value)}>
                <option>Select the Dish</option>
                {productData.map((value,index)=><option key={index+1}>{value.name}</option>)}
              </Form.Control>
            </Col>
            {/* <Col md={2}>
              <div className="btn-info btn" onClick={()=>setItem(search)}>Search</div>
            </Col> */}
            <Col md={5}>
              <Form.Control as="select" value={vendor} defaultValue="Choose..." onChange={(e)=>setVendor(e.target.value)}>
                <option>Filter with Vendors</option>
                <option>vendor1</option>
                <option >vendor2</option>
                <option>vendor3</option>
              </Form.Control>
            </Col>
          </Row>
          <br />
          <Row>
           {filterItem()}
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default CustomerScreen;
