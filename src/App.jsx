import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Banner from "./components/banner/banner";
import Footer from "./components/footer/footer";
import Books from "./components/book-section/books/books";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Books />
      <Footer />
    </>
  );
}

export default App;
