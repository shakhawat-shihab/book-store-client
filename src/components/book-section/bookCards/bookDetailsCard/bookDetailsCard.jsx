import React, { useEffect, useState } from "react";
import "./bookDetailsCard.scss";
import Spinner from "../../../spinner/spinner";

const BookDetailsCard = ({ props }) => {
  const [imageState, setImageState] = useState(0);
  const { title, author, price, language, category, _id, images } = props;

  const addProductToLocalStorage = (productId, quantity) => {
    // Check if local storage is supported by the browser
    if (typeof Storage !== "undefined") {
      // Get the current shopping cart from local storage (if it exists)
      const currentCart = JSON.parse(localStorage.getItem("cart")) || {};
      // Add or update the quantity of the product
      currentCart[productId] = (currentCart[productId] || 0) + quantity;
      // Save the updated cart back to local storage
      localStorage.setItem("cart", JSON.stringify(currentCart));
      console.log(
        `Product ${productId} added to cart with quantity ${quantity}.`
      );
    } else {
      console.error("Local storage is not supported in this browser.");
    }
  };

  useEffect(() => {
    const loadImages = async () => {
      try {
        let url = images[0];
        const response = await fetch(url);
        // console.log(response);
        if (response.ok) {
          setImageState(1);
        } else {
          //image not loaded
          setImageState(-1);
        }
      } catch (e) {
        console.error(`Error loading image : ${e}`);
        setImageState(-1);
      }
    };

    //check if image exist
    if (images?.length) {
      const imageUrlRegex = /\.(jpeg|jpg|gif|png)$/i;
      const isValidImageUrl = imageUrlRegex.test(images[0]);
      if (isValidImageUrl) loadImages();
      else setImageState(-1);
    } else {
      setImageState(-1);
    }
  }, [images]);

  return (
    <div className="book-card">
      <div>
        {imageState == 0 ? (
          <Spinner />
        ) : (
          <img
            src={`${
              imageState == 1
                ? images[0]
                : "https://img.freepik.com/free-vector/open-blue-book-white_1308-69339.jpg"
            }`}
            alt="book image"
            width="100%"
            height="300px"
          />
        )}
      </div>

      <div className="book-card-info">
        <h3>{title}</h3>
        <div className="brand-category">
          <p>{author}</p>
          <p>
            <i className="fa-solid fa-tag"></i>
            <span style={{ marginLeft: "8px" }}>{language}</span>
          </p>
        </div>
        <div className="price">
          <h4>Price: {price} $ </h4>
          <h5> ({} % Discount)</h5>
        </div>
        <div>
          {/* <Rating
            emptySymbol="fa fa-star-o fa-1x"
            fullSymbol="fa fa-star fa-1x"
            style={{ color: "gold" }}
            initialRating={rating}
            readonly
          /> */}
        </div>

        <div className="button-container">
          <button
            className="cart-button"
            onClick={(e) => {
              // alert("add to cart button clicked");
              addProductToLocalStorage(id, 1);
              e.stopPropagation();
            }}
          >
            Add to cart
          </button>
          <button
            className="order-button"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            OrderNow
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsCard;
