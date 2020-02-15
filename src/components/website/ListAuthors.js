import React, { useState, useEffect } from "react";
import { firebaseApp } from "../../firebase";
import "@trendmicro/react-datepicker/dist/react-datepicker.css";
import AuthorCardItem from "./AuthorCardItem";
import MetaTags from 'react-meta-tags';


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
    const db = firebaseApp.firestore();
    db.collection("authors")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(doc => {
          state.listAuthors.push({
            author: doc.data().author,
            imageAuthorUrl: doc.data().imageAuthorUrl,
            description: doc.data().description,
            dateAuthor: doc.data().dateAuthor,
            idAuthor: doc.id
          });
          updateState({ ...state, ...state.listAuthors });
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }, []);



  state.listAuthors.sort(function (a, b) {
    let nameA = a.author.split(' ')[1].toLowerCase(), nameB = b.author.split(' ')[1].toLowerCase()
    if (nameA < nameB) //sort string ascending
      return -1
    if (nameA > nameB)
      return 1
    return 0 //default return value (no sorting)
  })

  return (
    <>
      <MetaTags>
        <title>Autores</title>
        <meta name="description" content="La Fuga Ediciones es un proyecto editorial que nace en 2014 con una propuesta de ficción literaria moderna y universal, en principio centrada en traducciones." />
      </MetaTags>
      <div className="content-first-authors">
        <div className="container">
          <div className="row align-text-center">

            <h5 className="title-page-ed">Autores</h5>

          </div>
          <div className="row align-text-center">
            {state.listAuthors.map(item => {
              return (
                <AuthorCardItem
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
