import React from "react";


const BookListItem = ({ newsTitle, idNews, onDeleteNews }) => {

    const handleOnDeleteNews = () => {
        onDeleteNews(idNews)
    }
  return (
    <>

      <div className="col-md-12">
        <div className="row div-list">
          <div>
            <h5 style={{ marginLeft: '20px', fontWeight: 'bold' }}>{newsTitle} </h5>
          </div>
          <div style={{ display: 'flex', flexWrap: 'no-wrap' }}>
            {/* <div>
              <Link className="button-class-list" to={`/dashboard/news/${idNews}/edit-news`} style={{ textDecoration: 'none' }}>
                editar noticia de prensa
          </Link>
            </div> */}
            <div style={{ marginLeft: '20px', marginRight:'10px' }}>
              <button className="button-class-list-edit" onClick={handleOnDeleteNews} style={{ textDecoration: 'none' }}>
              borrar noticia de prensa
          </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookListItem;