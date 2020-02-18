import React, { useState, useEffect } from "react";
import { firebaseApp } from "../../firebase";
import { Link } from "react-router-dom";
import NewsListItem from "./NewsListItem";
import MetaTags from "react-meta-tags";
import { useHistory } from "react-router";

const ListNews = props => {
  //const history = useHistory();

  const [state, updateState] = useState({
    newsTitle: "",
    newsDate: "",
    newsUrl: "",
    newsFileUrl: "",
    listNews: [],
    idNews: ""
  });

  const [msg, setMsg] = useState(false);

  const db = firebaseApp.firestore();

  const [listBookNews, setListBookNews] = useState([]);

  useEffect(() => {
    getNews();
  }, [listBookNews]);

  const getNews = () => {
    const docRef = db.collection(`books/${props.id}/news`);

    docRef
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          state.listNews.push({
            newsTitle: doc.data().newsTitle,
            newsDate: doc.data().newsDate,
            newsUrl: doc.data().newsUrl,
            newsFileUrl: doc.data().newsFileUrl,
            idNews: doc.id
          });
        });
        console.log('state.listNews', state.listNews)
        setListBookNews(state.listNews);
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });
  };

  const handleDeleteNews = idNews => {
    let res = window.confirm("borrar definitivamente?");
    if (res) {
      const docRef = db.collection(`books/${props.id}/news`);
      docRef
        .doc(`${idNews}`)
        .delete()
        .then(function() {
          getNews();
          setMsg(true);
        })
        .catch(function(error) {
          console.error("Error removing document: ", error);
        });
    }
  };

  /* const goBack = () => {
    history.goBack();
  }; */

  return (
    <>
      <MetaTags>
        <title>Lista Noticias de prensa</title>
        <meta
          name="description"
          content="La Fuga Ediciones es un proyecto editorial que nace en 2014 con una propuesta de ficción literaria moderna y universal, en principio centrada en traducciones."
        />
      </MetaTags>
      <br></br>
      <h1 className="align-text-center">Lista Noticias de prensa</h1>
      
      <br></br>
        <button className="arrow" /* onClick={goBack} */>
          &#60; ATRAS
        </button>
      <div className="align-text-center">
        <Link
          className="button-class-list"
          to={`/dashboard/news/${props.id}/add-news`}
          style={{ textDecoration: "none" }}
        >
          añadir noticia de prensa
        </Link>
      </div>
      {msg && <h2>Noticia borrada</h2>}
      <br></br>
      {listBookNews.map(item => {
        console.log("item", item);
        return (
          <NewsListItem
            key={item.idNews}
            newsTitle={item.newsTitle}
            newsUrl={item.newsUrl}
            newsDate={item.newsDate}
            idNews={item.idNews}
            newsFileUrl={item.newsFileUrl}
            onDeleteNews={handleDeleteNews}
          />
        );
      })}
    </>
  );
};

export default ListNews;
