import React from "react";
import { Link } from "react-router-dom";

const AuthorCardItem = ({ author, id, imageAuthorUrl }) => {
  return (
    <>
      <div className="col-xs-12 col-sm-3 mt-25">
        <Link to={`/autor/${id}`} style={{ textDecoration: "none" }}>
          {imageAuthorUrl ? (
            <div>
              <img
                src={imageAuthorUrl}
                className="avatar"
                height="150"
                alt={`foto ${author}`}
              />
            </div>
          ) : (
            <div className="round"></div>
          )}
          <h5 className="author-name">{author}</h5>
        </Link>
      </div>
    </>
  );
};

export default AuthorCardItem;
