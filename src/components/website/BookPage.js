import React, { useState, useEffect } from "react";
import { firebaseApp } from "../../firebase";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import MetaTags from "react-meta-tags";
import NewsItem from './NewsItem';

const BookPage = props => {
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
    startReedUrl: "",
    pressNoteUrl: "",
    imageAuthorUrl: ""
  });

  const [listNews, setListNews] = useState([]);

  useEffect(() => {
    const db = firebaseApp.firestore();
    db.collection(`books`)
      .doc(`${props.id}`)
      .get()
      .then(function (doc) {
        updateState({
          author: doc.data().author || "",
          authorId: doc.data().authorId || "",
          title: doc.data().title || "",
          subtitle: doc.data().subtitle || "",
          introduction: doc.data().introduction || "",
          translator: doc.data().translator || "",
          illustrations: doc.data().illustrations || "",
          editedBy: doc.data().editedBy || "",
          prologue: doc.data().prologue || "",
          format: doc.data().format || "",
          binding: doc.data().binding || "",
          pages: doc.data().pages || "",
          isbn: doc.data().isbn || "",
          pvp: doc.data().pvp || "",
          description: doc.data().description || "",
          collection: doc.data().collection || "",
          pubDate: doc.data().pubDate || "",
          storeUrl: doc.data().storeUrl || "",
          imageUrl: doc.data().imageUrl || "",
          startReedUrl: doc.data().startReedUrl || "",
          pressNoteUrl: doc.data().pressNoteUrl || "",
          imageAuthorUrl: doc.data().imageAuthorUrl || ""
        });
      })
      .then(() => {
        const docRef = db.collection(`books/${props.id}/news`);

        docRef
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              listNews.push(doc.data());
              setListNews([...listNews]);
            });
          })
          .catch(function (error) {
            console.log("Error getting documents: ", error);
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
              <a href={state.storeUrl}>
                <br></br>
                <button className="store-button">
                  compra en nuestra tienda
                </button>
              </a>
            </div>
            <div className="col-xs-12 col-sm-12 col-lg-4 tabla">
              <table>
                <tbody>
                  <tr>
                    <td>AUTOR:</td><td><Link to={`/autor/${state.authorId}`} key={props.id} className="book-title-author">{state.author}</Link></td>
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
              El maestro W., célebre director de orquesta, está a punto de
              estrenar la temporada del Teatro lírico de Roma con una elaborada
              puesta en escena del Otelo de Verdi. Desde los primeros ensayos,
              su mentor y también productor de la ópera, advierte que una
              extraña ansiedad aflige al director. Ese temor, visiblemente en
              aumento, culminará en un inexplicable ataque de nervios que dará
              al traste con el esperado estreno y que provocará la huida
              precipitada del director. ¿Qué lleva al prestigioso músico a
              jugarse la reputación ganada a pulso durante toda su impecable
              carrera? Las pesquisas sobre la causa de la aflicción de W.
              revelarán una historia que se remonta a los tiempos de la guerra
              cuando, huyendo del norte de Italia ocupado por los nazis, el
              director se refugió en un convento de un pueblo de montaña. Allí,
              a salvo de la persecución, conoció a Romualdi, un hombrecillo
              ignominioso, mediocre y ridículo que, por las oscuras razones que
              W. acabará confesando a lo largo de una noche entera, hizo mella
              en lo más profundo de su alma y de su talento. A partir de una
              fotografía, Mario Soldati ofrece una brillante reflexión sobre el
              intercambio de roles y los mecanismos que pueden llevar a un genio
              a someterse a la mezquindad. La chaqueta verde, primera entrega de
              la trilogía A cena col Commendatore, está considerada por la
              crítica como la mejor novela corta de Mario Soldati, un ejercicio
              literario a caballo entre la fábula moral, el thriller clásico y
              la sátira que, a pesar de la crudeza de sus contenidos, mantiene
              la sonrisa perenne en el rostro del lector. Esta edición viene
              acompañada del artículo que dedicó el escritor Giorgio Bassani a
              la primera edición de la trilogía.
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>

      {/* <NewsItem newsDate={item.newsDate} */}

      {(listNews.length > 0) && <div className="container">
        <div className="row">
          <div className="col-xs-12 colo-lg-12">
            <br />
            <br />
            <h3>Noticias de Prensa</h3>
            {listNews.map(item => {
              return <NewsItem key={item.newsTitle} newsTitle={item.newsTitle} newsUrl={item.newsUrl} newsDate={item.newsDate} newsFileUrl={item.newsFileUrl} />
            })}
            <br />
          </div>
        </div>
      </div>}
    </>
  );
};

export default withRouter(BookPage);
