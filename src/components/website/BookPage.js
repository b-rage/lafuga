import React, { useState, useEffect } from "react";
import { firebaseApp } from "../../firebase";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import MetaTags from "react-meta-tags";
import NewsItem from "./NewsItem";

const BookPage = (props) => {
  const [state, updateState] = useState({
    bookId: "",
    author: "",
    authorId: "",
    title: "",
    subtitle: "",
    introduction: "",
    translator: "",
    illustrations: "",
    editedBy: "",
    prologue: "",
    format: "",
    binding: "",
    pages: "",
    isbn: "",
    pvp: "",
    description: "",
    collection: "",
    pubDate: "",
    storeUrl: "",
    imageUrl: "",
    imageSponsorUrl: "",
    startReedUrl: "",
    pressNoteUrl: "",
    imageAuthorUrl: "",
  });

  const [listNews, setListNews] = useState([]);

  useEffect(() => {
    fetch(
      `https://us-central1-lafuga-8ef6d.cloudfunctions.net/app/api/books/${props.id}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((doc) => {
        updateState({
          author: doc.author || "",
          authorId: doc.authorId || "",
          title: doc.title || "",
          subtitle: doc.subtitle || "",
          introduction: doc.introduction || "",
          translator: doc.translator || "",
          illustrations: doc.illustrations || "",
          editedBy: doc.editedBy || "",
          prologue: doc.prologue || "",
          format: doc.format || "",
          binding: doc.binding || "",
          pages: doc.pages || "",
          isbn: doc.isbn || "",
          pvp: doc.pvp || "",
          description: doc.description || "",
          collection: doc.collection || "",
          pubDate: doc.pubDate || "",
          storeUrl: doc.storeUrl || "",
          imageUrl: doc.imageUrl || "",
          titleSponsor: doc.titleSponsor || "",
          imageSponsorUrl: doc.imageSponsorUrl || "",
          startReedUrl: doc.startReedUrl || "",
          pressNoteUrl: doc.pressNoteUrl || "",
          imageAuthorUrl: doc.imageAuthorUrl || "",
        });
      })
      .then(() => {
        fetch(
          `https://us-central1-lafuga-8ef6d.cloudfunctions.net/app/api/books/${props.id}/news`,
          {
            method: "GET",
          }
        )
          .then((res) => res.json())
          .then((response) => {
            response.forEach((doc) => {
              listNews.push(doc);
              setListNews([...listNews]);
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
        <title>{state.title}</title>
        <meta
          name="description"
          content="La Fuga Ediciones es un proyecto editorial que nace en 2014 con una propuesta de ficción literaria moderna y universal, en principio centrada en traducciones."
        />
      </MetaTags>
      <div className="content-first-book">
        <div className="container">
          <div className="row arrow-left">
            <button className="arrow" onClick={goBack}>
              &#60;
            </button>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-lg-3">
              <img
                src={state.imageUrl}
                width="159"
                height="250"
                alt={`portada ${state.title}`}
              />
              <br />
{/*               {state.storeUrl && (
                <a href={state.storeUrl}>
                  <br></br>
                  <button className="store-button">
                    compra en nuestra tienda
                  </button>
                </a>
              )} */}
            </div>
            <div className="col-xs-12 col-sm-12 col-lg-4 tabla">
              <table>
                <tbody>
                  <tr>
                    <td>AUTOR:</td>
                    <td>
                      <Link
                        to={`/autor/${state.authorId}`}
                        key={props.id}
                        className="book-title-author"
                      >
                        {state.author}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>TÍTULO:</td>
                    <td className="td-title">{state.title}</td>
                  </tr>
                  {state.subtitle && (
                    <tr>
                      <td>SUBTÍTULO:</td>
                      <td className="td-title">{state.subtitle}</td>
                    </tr>
                  )}
                  {state.prologue && (
                    <tr>
                      <td>PRÓLOGO:</td>
                      <td>{state.prologue}</td>
                    </tr>
                  )}
                  {state.illustrations && (
                    <tr>
                      <td>ILUSTRACIONES:</td>
                      <td>{state.illustrations}</td>
                    </tr>
                  )}
                  {state.editedBy && (
                    <tr>
                      <td>EDICIONES DE:</td>
                      <td>{state.editedBy}</td>
                    </tr>
                  )}
                  {state.introduction && (
                    <tr>
                      <td>INTRODUCCIÓN:</td>
                      <td>{state.introduction}</td>
                    </tr>
                  )}
                  {state.translator && (
                    <tr>
                      <td>TRADUCTOR:</td>
                      <td>{state.translator}</td>
                    </tr>
                  )}
                  {state.format && (
                    <tr>
                      <td>FORMATO:</td>
                      <td>{state.format}</td>
                    </tr>
                  )}
                  {state.binding && (
                    <tr>
                      <td>ENCUADERNACIÓN:</td>
                      <td>{state.binding}</td>
                    </tr>
                  )}
                  {state.pages && (
                    <tr>
                      <td>PÁGINAS:</td>
                      <td>{state.pages}</td>
                    </tr>
                  )}
                  {state.isbn && (
                    <tr>
                      <td>ISBN:</td>
                      <td>{state.isbn}</td>
                    </tr>
                  )}
                  {state.pvp && (
                    <tr>
                      <td>PVP:</td>
                      <td>{state.pvp} €</td>
                    </tr>
                  )}
                  {state.pubDate && (
                    <tr>
                      <td>FECHA PUBLICACIÓN:</td>
                      <td>{state.pubDate}</td>
                    </tr>
                  )}
                </tbody>
              </table>
              <br></br>
              <div className="buttons-container">
                <div>
                  {state.pressNoteUrl && (
                    <a href={state.pressNoteUrl}>
                      <button className="book-download-button">
                        descarga nota prensa
                      </button>
                    </a>
                  )}
                </div>
                <div>
                  {state.imageUrl && (
                    <a href={state.imageUrl}>
                      <button className="book-download-button">
                        descarga portada
                      </button>
                    </a>
                  )}
                </div>
                <div>
                  {state.imageAuthorUrl && (
                    <a href={state.imageAuthorUrl}>
                      <button className="book-download-button">
                        descarga foto autor
                      </button>
                    </a>
                  )}
                </div>
                <div>
                  {state.startReedUrl && (
                    <a href={state.startReedUrl}>
                      <button className="book-download-button">
                        descarga empieza a leer
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-lg-5 text-book">
              {state.description}
              <br />
              <br />
              {state.titleSponsor}
              <br />
              <br />
              {state.imageSponsorUrl && (
                <img
                  src={state.imageSponsorUrl}
                  width="300"
                  height="42"
                  alt={`image sponsor`}
                />
              )}
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>

      {/* <NewsItem newsDate={item.newsDate} */}

      {listNews.length > 0 && (
        <div className="container">
          <div className="row">
            <div className="col-xs-12 colo-lg-12">
              <br />
              <br />
              <h3>Noticias de Prensa</h3>
              {listNews.map((item) => {
                return (
                  <NewsItem
                    key={item.newsTitle}
                    newsTitle={item.newsTitle}
                    newsUrl={item.newsUrl}
                    newsDate={item.newsDate}
                    newsFileUrl={item.newsFileUrl}
                  />
                );
              })}
              <br />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default withRouter(BookPage);
