import React, { useEffect, useState } from "react";
import NavSections from "../navSections/navSections";
import "./featuredBooks.style.scss";
import BookCard from "../card/bookCard/bookCard";
const FeaturedBooks = () => {
  const [books, setBooks] = useState([]);
  const [selectedSection, setSelectedSection] = useState(0);
  const sectionName = ["featured", "on sale", "most viewed"];
  const userSelectedSection = (index) => {
    setSelectedSection(index);
  };
  console.log(selectedSection);

  useEffect(() => {
    if (selectedSection == 0) {
      fetch("http://localhost:8000/books/all?sortOrder=desc&sortParam=rating")
        .then((res) => res.json())
        .then((data) => {
          setBooks(data?.data?.books);
        });
    }
    if (selectedSection == 1) {
      fetch("http://localhost:8000/books/all?sortOrder=asc&sortParam=price")
        .then((res) => res.json())
        .then((data) => {
          setBooks(data?.data?.books);
        });
    }
    if (selectedSection == 2) {
      fetch("http://localhost:8000/books/all?sortOrder=desc&sortParam=views")
        .then((res) => res.json())
        .then((data) => {
          setBooks(data?.data?.books);
        });
    }
  }, [selectedSection]);

  return (
    <div className="container ">
      <div className="featured-section-container">
        <div className="featured-section-title">
          <h2>Featured Books</h2>
        </div>
        <div className="featured-section-nav-contianer">
          <NavSections
            activeOption={selectedSection}
            options={sectionName}
            userSelectedSection={userSelectedSection}
          />
        </div>
        <div style={{ display: "flex" }}>
          <div className="featured-books-cards">
            {books?.map((x, index) => (
              <BookCard key={x?._id} props={x} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBooks;
