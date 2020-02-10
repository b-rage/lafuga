import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const BookListItem = ({ title, id }) => {
  return (
    <>
      <div>
        <h2>{title} </h2>
      </div>
      <div className="div-list">
          <Link to={`/dashboard/book/${id}`} style={{ textDecoration: 'none' }}>  
            <h5>añadir noticia de prensa</h5>
          </Link>
        </div>
    </>
  );
};

export default BookListItem;
