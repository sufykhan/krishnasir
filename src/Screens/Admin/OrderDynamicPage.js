import React from 'react'
import { Container, Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const OrderDynamicPage = () => {
    let { id } = useParams();
    return (
        <>
        <Header/>
        <main className="py-3">
            <Container>
            <Table striped bordered hover responsive>
  <thead>
    <tr>
      <th>{id}</th>
      <th>Dish</th>
      <th>Vendor</th>
      <th>Qty</th>
      <th>Unit Price</th>
      <th>Total Price</th>
    </tr>
  </thead>
  <tbody>
  {/* here will be the customer order data after checkput */}
    <tr>
      <td>1</td>
      <td>Gobi Manchuri</td>
      <td>Adigas</td>
      <td>2</td>
      <td>50</td>
      <td>100</td>
    </tr>
  </tbody>
</Table>
</Container>
</main>
<Footer/>
      
        </>
    )
}

export default OrderDynamicPage
