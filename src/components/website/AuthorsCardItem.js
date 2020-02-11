import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const AuthorsCardItem = ({ author, id, imageAuthorUrl }) => {
  return (
    <>

      <div class="col-xs-12 col-sm-3 mt-25">
          <Link to={`/autor/${id}`} style={{ textDecoration: 'none' }}>  
          { imageAuthorUrl ? <img
                src={imageAuthorUrl}
                alt={`foto ${author}`}
                height="150"
                className="avatar"

              /> : <div className="round">
                </div>}
            <h5 className="author-name">{author}</h5>
          </Link>
        </div>
    </>
  );
};

export default AuthorsCardItem;