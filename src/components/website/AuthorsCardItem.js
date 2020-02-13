import React from "react";
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';


const AuthorsCardItem = ({ author, id, imageAuthorUrl }) => {
  return (
    <>

      <div className="col-xs-12 col-sm-3 mt-25">
        <Link to={`/autor/${id}`} style={{ textDecoration: 'none' }}>
          {imageAuthorUrl ? <div>
            <LazyLoad height="150">
              <img src={imageAuthorUrl} className="avatar" height="150" alt={`foto ${author}`} />
            </LazyLoad>
          </div> : <div className="round">
            </div>}
          <h5 className="author-name">{author}</h5>
        </Link>
      </div>
    </>
  );
};

export default AuthorsCardItem;