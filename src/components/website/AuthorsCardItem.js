import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const AuthorsCardItem = ({ author, id }) => {
  return (
    <>

      <div className="div-list">
          <Link to={`/autor/${id}`} style={{ textDecoration: 'none' }}>  
            <h5>{author}</h5>
          </Link>
        </div>
    </>
  );
};

export default AuthorsCardItem;