import React from "react";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const AuthorsCardItem = ({ author, id, imageAuthorUrl }) => {
  return (
    <>

      <div className="col-xs-12 col-sm-3 mt-25">
        <Link to={`/autor/${id}`} style={{ textDecoration: 'none' }}>
          {imageAuthorUrl ? <div>
            <LazyLoadImage
              alt={`foto ${author}`}
              src={imageAuthorUrl}
              height="150"
              className="avatar" />
            
          </div> : <div className="round">
            </div>}
          <h5 className="author-name">{author}</h5>
        </Link>
      </div>
    </>
  );
};

export default AuthorsCardItem;