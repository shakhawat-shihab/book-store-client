import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Banner from "./components/banner/banner";
import Footer from "./components/footer/footer";
import PreNavbar from "./components/preNavbar/preNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BestSelling from "./components/bestSelling/bestSelling";

function App() {
  return (
    <>
      <BrowserRouter>
        <PreNavbar />
        <Navbar />
        <BestSelling />
        {/* <Routes></Routes> */}
      </BrowserRouter>
      {/* <PreNavbar />
      <Navbar />
      <Banner />
      <Footer /> */}
    </>
  );
}

export default App;
