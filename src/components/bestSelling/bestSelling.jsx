import React, { useEffect, useState } from "react";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import "./bestSelling.style.scss";
import BookCard from "../card/bookCard/bookCard";

const BestSelling = () => {
  const [books, setBooks] = useState([]);
  const [visibleBooks, setVisibleBooks] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  let limit = 5;
  // const [endIndex, setEndIndex] = useState(4);

  useEffect(() => {
    fetch("http://localhost:8000/books/all")
      .then((res) => res.json())
      .then((data) => setBooks(data?.data?.books));
  }, []);

  useEffect(() => {
    let slicedBooks = books.slice(startIndex, startIndex + limit);
    setVisibleBooks(slicedBooks);
  }, [startIndex, books]);

  // console.log(books);

  const prevSlide = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
    else console.log("can't slide to prev");
  };

  const nextSlide = () => {
    if (books?.length - startIndex > limit) setStartIndex(startIndex + 1);
    else console.log("can't slide to next");
  };

  console.log(startIndex);

  // console.log("currentIndex ", currentIndex);

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
          <button onClick={prevSlide} className="prev-button">
            <SlArrowLeft size={20} />
          </button>
          <button onClick={nextSlide} className="next-button">
            <SlArrowRight size={20} />
          </button>
          {visibleBooks?.map((x, index) => (
            <BookCard
              key={x?._id}
              props={x}
              // style={{
              //   transform: `translateX(${100 * (index - currentIndex)}%)`,
              // }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
