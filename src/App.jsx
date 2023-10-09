import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Banner from "./components/banner/banner";
import Footer from "./components/footer/footer";
import PreNavbar from "./components/preNavbar/preNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BestSelling from "./components/bestSelling/bestSelling";
import FeaturedBooks from "./components/featuredBooks/featuredBooks";
import Login from "./pages/logIn/logIn";
import Register from "./pages/register/register";
import NotFound from "./components/notFound/notFound";
import Home from "./pages/home/home";
import Cart from "./pages/cart/cart";
import WishList from "./pages/wishList/wishList";
import AdminRoute from "./pages/authenticate/adminRoute";
import UserRoute from "./pages/authenticate/userRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <PreNavbar /> */}
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />

          {/* <Route element={<AdminRoute />}>
            <Route path="/add-product" element={<InsertProduct />} />
            <Route path="/update-product" element={<UpdateProduct />} />
            <Route path="/delete-product" element={<DeleteProduct />} />
            <Route path="/profile" element={<Profile />}>
              <Route path="edit" element={<EditProfile />} />
              <Route path="delete" element={<DeleteProfile />} />
            </Route>
          </Route> */}
          <Route element={<UserRoute />}>
            {/* <Route path="/add-product" element={<InsertProduct />} />
            <Route path="/update-product" element={<UpdateProduct />} />
            <Route path="/delete-product" element={<DeleteProduct />} />
            <Route path="/profile" element={<Profile />}>
              <Route path="edit" element={<EditProfile />} />
              <Route path="delete" element={<DeleteProfile />} />
            </Route> */}
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
