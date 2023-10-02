import React, { useEffect } from "react";
import useBookHook from "../../../hooks/useBookHook";
import "./books.style.scss";
import Spinner from "../../spinner/spinner";
import BookDetailsCard from "../bookCards/bookDetailsCard/bookDetailsCard";

const Books = () => {
  const { books, isLoadingBook, getAllBooks } = useBookHook();

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <div className="book-container">
      <div className="book-title">
        <h2 style={{ textAlign: "center" }}> All Products</h2>
      </div>
      <div className="book-section">
        {isLoadingBook ? (
          <Spinner />
        ) : (
          <div className="book-card-container">
            {books?.map((x) => (
              <BookDetailsCard props={x} key={x?.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Books;
