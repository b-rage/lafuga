import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import MetaTags from "react-meta-tags";

const AuthorPage = (props) => {
  const [state, updateState] = useState({
    author: "",
    description: "",
    imageAuthorUrl: "",
    dateAuthor: "",
    listAuthors: [],
  });

  const [listAuthorBooks, setListAuthorBooks] = useState([]);

  useEffect(() => {
    fetch(
      `https://us-central1-lafuga-8ef6d.cloudfunctions.net/app/api/authors/${props.id}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((doc) => {
        updateState({
          author: doc.author || "",
          description: doc.description || "",
          imageAuthorUrl: doc.imageAuthorUrl || "",
          dateAuthor: doc.dateAuthor || "",
        });
      })
      .then(() => {
        fetch(
          `https://us-central1-lafuga-8ef6d.cloudfunctions.net/app/api/authors/${props.id}/authorBooks`,
          {
            method: "GET",
          }
        )
          .then((res) => res.json())
          .then((response) => {
            response.forEach((doc) => {
              listAuthorBooks.push(doc);
              setListAuthorBooks([...listAuthorBooks]);
            });
          });
      })
      .catch(function (error) {
        console.log("Error getting documents2: ", error);
      });
  }, []);

  const goBack = () => {
    props.history.goBack();
  };

  return (
    <>
      <MetaTags>
        <title>{state.author}</title>
        <meta
          name="description"
          content="La Fuga Ediciones es un proyecto editorial que nace en 2014 con una propuesta de ficción literaria moderna y universal, en principio centrada en traducciones."
        />
      </MetaTags>
      <div className="container-autor-page">
        <div className="container">
          <br></br>
          <div className="row">
            <button className="arrow" onClick={goBack}>
              &#60;
            </button>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="box1">
                <div id="u120-8" className="clearfix colelem">
                  <p id="u120-2">{state.author}</p>
                  {state.dateAuthor && <p id="u120-4">{state.dateAuthor}</p>}
                  <div className="description">{state.description} </div>
                  <div id="u121-7" className="clearfix colelem">
                    <span id="u121">Títulos:</span>

                    {listAuthorBooks &&
                      listAuthorBooks.map((item) => {
                        return (
                          <React.Fragment key={item.bookId}>
                            <br />
                            <Link
                              to={`/libro/${item.bookId}`}
                              key={item.bookId}
                              className="book-title-author"
                            >
                              -&nbsp;{item.bookTitle}
                            </Link>
                          </React.Fragment>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              {state.imageAuthorUrl && (
                <div className="box2">
                  <img
                    src={state.imageAuthorUrl}
                    alt={`foto ${state.author}`}
                    height="200"
                    className="image-author"
                  />{" "}
                  <a href={state.imageAuthorUrl}>
                    <br></br>
                    <button className="download">descarga foto</button>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(AuthorPage);
