import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const BookListItem = ({ title, id }) => {
  return (
    <>

      <div className="col-md-12">
        <div className="row div-list">
          <div>
            <h5 style={{ marginLeft: '20px', fontWeight: 'bold' }}>{title} </h5>
          </div>
          <div style={{ display: 'flex', flexWrap: 'no-wrap' }}>
            <div>
              <Link className="button-class-list" to={`/dashboard/news/${id}`} style={{ textDecoration: 'none' }}>
                añadir noticia de prensa
          </Link>
            </div>
            <div style={{ marginLeft: '20px', marginRight:'10px' }}>
              <Link className="button-class-list-edit" to={`/dashboard/edit-book/${id}`} style={{ textDecoration: 'none' }}>
                editar libro
          </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookListItem;
