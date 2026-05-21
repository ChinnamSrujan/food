import React, { useEffect } from "react";
import "./App.css";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/layouts/Header";
import Home from "./components/layouts/Home";
import Menu from "./components/layouts/Menu";
import Login from "./components/users/Login";
import Register from "./components/users/Register";
import Cart from "./components/cart/Cart";
import Profile from "./components/users/Profile";
import ForgotPassword from "./components/users/ForgotPassword";
import NewPassword from "./components/users/NewPassword";
import UpdateProfile from "./components/users/UpdateProfile";
import ProtectedRoute from "./components/layouts/ProtectedRoute";
import store from "./store";
import { loadUser } from "./actions/userAction";
import OrderSuccess from "./components/cart/OrderSuccess";
import ListOrders from "./components/order/ListOrders";
import OrderDetails from "./components/order/OrderDetails";

export default function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          <Routes>
            {/* Public routes */}
            <Route path="/users/login" element={<Login />} />
            <Route path="/users/signup" element={<Register />} />
            <Route path="/users/forgotPassword" element={<ForgotPassword />} />
            <Route path="/users/resetpassword/:token" element={<NewPassword />} />

            {/* Protected routes — require login */}
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/eats/stores/:id/menus" element={<ProtectedRoute><Menu /></ProtectedRoute>} />
            <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
            <Route path="/users/me" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/users/me/update" element={<ProtectedRoute><UpdateProfile /></ProtectedRoute>} />
            <Route path="/success" element={<OrderSuccess />} />
            <Route path="/eats/orders/me/myOrders" element={<ProtectedRoute><ListOrders /></ProtectedRoute>} />
            <Route path="/eats/orders/:id" element={<ProtectedRoute><OrderDetails /></ProtectedRoute>} />

            {/* Catch all */}
            <Route path="*" element={<h1>The page does not exist</h1>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
