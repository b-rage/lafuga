import React, { useState, useEffect } from "react";
import { firebaseApp } from "../../firebase";
import { Route, Redirect, withRouter } from "react-router-dom";
import "@trendmicro/react-datepicker/dist/react-datepicker.css";
import MetaTags from 'react-meta-tags';

const AutorPage = props => {
  const [state, updateState] = useState({
    author: "",
    description: "",
    imageAuthorUrl: "",
    dateAuthor: "",
    listAuthors: []
  });

  useEffect(() => {
    const db = firebaseApp.firestore();
    db.collection(`authors`)
      .doc(`${props.id}`)
      .get()
      .then(function (doc) {
        updateState({
          author: doc.data().author,
          description: doc.data().description,
          imageAuthorUrl: doc.data().imageAuthorUrl,
          dateAuthor: doc.data().dateAuthor
        });
        console.log("AUTORES", doc.data());
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
    //updateState(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  }, []);

  const goBack = () => {
    props.history.goBack();
  };

  return (
    <>
      <MetaTags>
        <title>{state.author}</title>
        <meta name="description" content="La Fuga Ediciones es un proyecto editorial que nace en 2014 con una propuesta de ficción literaria moderna y universal, en principio centrada en traducciones." />
      </MetaTags>
      <div className="container-autor-page">
        <div className="container">
          <br></br>
          <div className="row">
            <button className="arrow" onClick={goBack}>&#60;</button>
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
                    <a className="link" href="el-tesoro.html">
                      {" "}
                      El tesoro de Franchard
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
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
                    <button className="descarga">descarga foto</button>
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

export default withRouter(AutorPage);
