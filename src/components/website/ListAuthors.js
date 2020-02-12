import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { firebaseApp } from "../../firebase";
import "@trendmicro/react-datepicker/dist/react-datepicker.css";
import AuthorsCardItem from "./AuthorsCardItem";

const ListAuthors = () => {
 

const [state, updateState] = useState({
    author: "",
    description: "",
    imageAuthorUrl: "",
    dateAuthor: "",
    idAuthor: "",
    listAuthors: []
  });

  useEffect(() => {
    /* const _listAuthors = window.sessionStorage.getItem('listAuthors');
    updateState({ ...state,listAuthors: _listAuthors }); */
   const db = firebaseApp.firestore();
    db.collection("authors")
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(doc => {
          state.listAuthors.push({
            author: doc.data().author,
            imageAuthorUrl: doc.data().imageAuthorUrl,
            description: doc.data().description,
            dateAuthor: doc.data().dateAuthor,
            idAuthor: doc.id
          });
          updateState({ ...state, ...state.listAuthors });
          console.log("AUTORES", state.listAuthors);
        });
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      }); 
    //updateState(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  }, []); 

 

  state.listAuthors.sort(function(a, b){
    let nameA=a.author.split(' ')[1].toLowerCase(), nameB=b.author.split(' ')[1].toLowerCase()
    if (nameA < nameB) //sort string ascending
        return -1 
    if (nameA > nameB)
        return 1
    return 0 //default return value (no sorting)
    })

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title >Autores</title>
      </Helmet>

      <div className="content_first_autores">
        <div className="container">
          <div className="row align-text-center">

            <h5 className="titol_pagina_editorial">Autores</h5>

          </div>
          <div className="row align-text-center">
            {state.listAuthors.map(item => {
              return (
                <AuthorsCardItem
                  key={item.author}
                  author={item.author}
                  id={item.idAuthor}
                  imageAuthorUrl={item.imageAuthorUrl}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListAuthors;
