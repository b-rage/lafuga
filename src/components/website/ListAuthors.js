import React, { useState, useEffect } from "react";
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

    fetch(
      `https://us-central1-lafuga-8ef6d.cloudfunctions.net/app/api/authors`,
      {
        method: "GET",
      }
    )
    .then(res => res.json())
    .then(response => {
        response.forEach(doc => {
          state.listAuthors.push({ author: doc.author, idAuthor: doc.id, imageAuthorUrl: doc.imageAuthorUrl, description: doc.description, dateAuthor: doc.dateAuthor })
          const result = state.listAuthors.filter(word => word.author !== 'Autores Varios');
          updateState({ ...state, listAuthors: result });
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
