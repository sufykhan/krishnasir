import React from 'react'
import { Container, Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const VendorDynamic = () => {
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
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
  {/* here will be the vendoe data after checkput */}
    <tr>
      <td>1</td>
      <td>Gobi Manchuri</td>
      <td>200</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Rice</td>
      <td>400</td>
    </tr>
  </tbody>
</Table>
</Container>
</main>
<Footer/>
      
        </>
    )
}

export default VendorDynamic