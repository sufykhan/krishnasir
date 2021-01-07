// import React from 'react'
// import { Container, Table } from 'react-bootstrap'
// import { useSelector } from 'react-redux'
// import { Link, useParams } from 'react-router-dom'
// import Footer from '../../components/Footer'
// import Header from '../../components/Header'

// const OrderDynamicPage = () => {
//     let { id } = useParams();
//     const { cartItems } = useSelector((state) => state.cart);
//     return (
//         <>
//         <Header/>
//         <main className="py-3" style={{background:"#c6e7dc"}}>
//             <Container>
//             <Link to="/admin" className="btn btn-info">Back</Link>
//             <hr/>
//             <br/>
//             <Table striped bordered hover responsive>
//   <thead>
//     <tr style={{fontWeight:"500"}}>
//       <th>OrderId:{id}</th>
//       <th>Dish</th>
//       <th>Vendor</th>
//       <th>Quantity</th>
//       <th>Unit Price</th>
//       <th>Total Price</th>
//     </tr>
//   </thead>
//   <tbody>
//   {/* here will be the customer order data after checkput */}
//   {cartItems.map(({calories,image,name,pri,product,qty,selectedvendor},index)=>
//   <tr>
//       <td>{index+1}</td>
//       <td>{name}</td>
//       <td>{selectedvendor}</td>
//       <td>{qty}</td>
//       <td>{pri}</td>
//       <td>{Number(pri*qty)}</td>
//     </tr>
//   )}
//   </tbody>
// </Table>
// </Container>
// </main>
// <Footer/>
      
//         </>
//     )
// }

// export default OrderDynamicPage
