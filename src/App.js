import React from "react";
import { Route } from "react-router-dom";
import Mainlogin from "./Screens/Mainlogin";
import AdminScreen from "./Screens/AdminScreen";
import Vendor from "./Screens/Admin/Vendor";
import Dish from "./Screens/Admin/Dish";
import Order from "./Screens/Admin/Order";
import Customer from "./Screens/Admin/Customer";
import CustomerScreen from "./Screens/CustomerScreen";
import CartScreen from "./Screens/CartScreen";
import OrderDynamicPage from "./Screens/Admin/OrderDynamicPage";

const App = () => {
  return (
    <>
     
          <Route path="/" exact>
            <Mainlogin />
          </Route>

          <Route path="/admin" exact>
            <AdminScreen />
          </Route>

          <Route path="/admin/vendors" exact>
            <Vendor />
          </Route>

          <Route path="/admin/dishes" exact>
            <Dish />
          </Route>

          <Route path="/admin/orders" exact>
            <Order />
          </Route>

          <Route path="/admin/customers" exact>
            <Customer />
          </Route>

          <Route path="/customer" exact>
            <CustomerScreen/>
          </Route>

          <Route path="/cart" exact>
            <CartScreen/>
          </Route>

          <Route path="/admin/order/:id" exact>
            <OrderDynamicPage/>
          </Route>

    </>
  );
};

export default App;
