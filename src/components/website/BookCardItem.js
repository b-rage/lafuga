import React from "react";
import { Link } from "react-router-dom";


const BookCardItem = ({
  pubDate,
  pvp,
  title,
  author,
  authorId,
  id,
  imageUrl
}) => {
  return (
    <>
      <div className="book-card-container">
        <div className="book-title-conntainer">
          <p className="book-title">{title}</p>
        </div>
        <Link to={`/autor/${authorId}`} style={{ textDecoration: "none" }}>
          <p className="link-author">{author.toUpperCase()}</p>
        </Link>
        <Link to={`/libro/${id}`} style={{ textDecoration: "none" }}>
          {imageUrl && (
            <div>
              <img src={imageUrl} height="250" alt={`foto ${title}`} />
            </div>
          )}
        </Link>
        <p className="bottom-title">
          EN LIBRERÍAS A PARTIR DE: <br />
          {pubDate}
        </p>
        <p className="bottom-price">PVP: {pvp} €</p>
      </div>
    </>
  );
};

export default BookCardItem;
