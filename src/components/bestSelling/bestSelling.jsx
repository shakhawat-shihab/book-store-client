import React, { useEffect, useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import "./bestSelling.style.scss";
import BookCard from "../card/bookCard/bookCard";

const BestSelling = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/books/all")
      .then((res) => res.json())
      .then((data) => setBooks(data?.data?.books));
  }, []);
  console.log(books);
  return (
    <div className="container">
      <div className="best-selling">
        <div className="best-selling-title">
          <h2>Bestselling Books</h2>
          <p>
            <span>View All</span>
            <SlArrowRight size={18} />
          </p>
        </div>
        <div className="best-selling-books">
          {books?.map((x) => (
            <BookCard key={x?._id} props={x} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
