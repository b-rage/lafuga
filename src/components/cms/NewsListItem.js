import React from "react";
import { Link } from "react-router-dom";

const BookListItem = ({ newsTitle, idNews, newsDate, idBook }) => {

  return (
    <>
      <div className="col-md-12">
        <div className="row div-list">
          <div>
            <h5 style={{ marginLeft: "20px", fontWeight: "bold" }}>
              {newsTitle}{" "}
            </h5>
          </div>
          <div>
            <h5 style={{ marginLeft: "20px", fontWeight: "bold" }}>
              {newsDate}{" "}
            </h5>
          </div>
          <div style={{ display: "flex", flexWrap: "no-wrap" }}>
            <div>
              <Link className="button-class-list" to={`/dashboard/book/${idBook}/edit-news/${idNews}`} style={{ textDecoration: 'none' }}>
                editar noticia de prensa
              </Link>
            </div> 
            {/* <div style={{ marginLeft: "20px", marginRight: "10px" }}>
              <button
                className="button-class-list-delete"
                onClick={handleOnDeleteNews}
                style={{ textDecoration: "none" }}
              >
                borrar noticia de prensa
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookListItem;
