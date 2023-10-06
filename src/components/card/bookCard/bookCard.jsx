import React, { useEffect, useState } from "react";
import "./bookCard.scss";
import demobook from "../../../assets/images/demoBook.png";
import Spinner from "../../spinner/spinner";

const BookCard = ({ props }) => {
  const [imageState, setImageState] = useState(0);
  const { title, author, price, language, category, _id, images } = props;

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

  console.log(title, imageState);

  return (
    <div className="book-card-container">
      <div className="book-card-img">
        {/* <img src={images[0]} alt="" /> */}
        {imageState == 0 ? (
          <Spinner />
        ) : (
          <img
            src={`${imageState == 1 ? images[0] : demobook}`}
            alt="book image"
            width="120px"
            height="170px"
          />
        )}
      </div>
      <div className="book-card-info-container">
        <div className="book-card-info">
          <p>{title}</p>
          <p>{author}</p>
          <p>{price}</p>
        </div>

        <div className="book-card-cart">
          <span>Add to Cart</span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
