import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Banner from "./components/banner/banner";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Footer />
    </>
  );
}

export default App;
