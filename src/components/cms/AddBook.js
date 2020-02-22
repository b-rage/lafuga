import React, { useState, useEffect } from 'react';
import { firebaseApp } from '../../firebase';
import moment from 'moment';
import DatePicker from '@trendmicro/react-datepicker';
import '@trendmicro/react-datepicker/dist/react-datepicker.css';
import FileUpload from './FileUpload';
import Select from 'react-select';
import MetaTags from 'react-meta-tags';

const collections = [{ op: 'En Serio' }, { op: 'Escalones' }, { op: 'Humoris Causa' }, { op: 'Pliegos Sueltos' }]


const AddBook = () => {


  const [state, updateState] = useState({
    bookId: '',
    author: '',
    authorId: '',
    title: '',
    subtitle: '',
    introduction: '',
    translator: '',
    illustrations: '',
    editedBy: '',
    prologue: '',
    format: '',
    binding: '',
    pages: '',
    isbn: '',
    pvp: '',
    description: '',
    collection: '',
    pubDate: moment(new Date()).format('YYYY-MM-DD'),
    storeUrl: '',
    imageUrl: '',
    startReedUrl: '',
    pressNoteUrl: '',
    imageAuthorUrl: '',
    msg: false
  });

  const [news, updateNews] = useState({
    newsTitle: '',
    newsDate: moment(new Date()).format('YYYY-MM-DD'),
    newsUrl: '',
    newsFileUrl: ''
  });

  const [addNews, updateAddNews] = useState(false);
  let authors = [];

  const db = firebaseApp.firestore();


  useEffect(() => {

    db.collection("authors")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(doc => {
          authors.push({ author: doc.data().author, imageAuthorUrl: doc.data().imageAuthorUrl, description: doc.data().description, idAuthor: doc.id })
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  });


  const handleInputChange = e => {
    updateState({ ...state, [e.target.name]: e.target.value, msg: false })
  }

  const handleDateChange = e => {
    updateState({ ...state, pubDate: moment(new Date(e)).format("DD/MM/YYYY") })
  };


  const doImageUrl = (url) => {
    updateState({ ...state, imageUrl: url })
  }

  const doStartReedUrl = (url) => {
    updateState({ ...state, startReedUrl: url })
  }

  const doPressNoteUrl = (url) => {
    updateState({ ...state, pressNoteUrl: url })
  }

  const handleSubmit = e => {
    e.preventDefault();

    // Add a new document in collection "books"
    db.collection("books").add({
      author: state.author,
      authorId: state.authorId,
      imageAuthorUrl: state.imageAuthorUrl,
      title: state.title,
      subtitle: state.subtitle,
      introduction: state.introduction,
      translator: state.translator,
      illustrations: state.illustrations,
      editedBy: state.editedBy,
      prologue: state.prologue,
      format: state.format,
      binding: state.binding,
      pages: state.pages,
      isbn: state.isbn,
      pvp: state.pvp,
      description: state.description,
      collection: state.collection,
      pubDate: state.pubDate,
      imageUrl: state.imageUrl,
      storeUrl: state.storeUrl,
      startReedUrl: state.startReedUrl,
      pressNoteUrl: state.pressNoteUrl
    })
      .then((docRef) => {
        db.collection(`authors`).doc(`${state.authorId}`).collection('authorBooks').add({
          bookTitle: state.title,
          bookId: docRef.id
        })
        updateState({ ...state, msg: true })
      })
      .catch(error => {
        console.error("Error writing document: ", error);
      });
  }

  /* const handleNewsInputChange = e => {
    updateNews({ ...news, [e.target.name]: e.target.value })
  }

  const onAddNewsChange = () => {
    updateAddNews(!addNews)
  }

  const handleDateNewsChange = e => {
    updateNews({ ...news, newsDate: moment(new Date(e)).format("DD/MM/YYYY") })
  };

  const doNewsNoteUrl = (url) => {
    updateNews({ ...news, newsFileUrl: url })
  } */

  const handleAuthorChange = value => {
    updateState({ ...state, author: value.author, authorId: value.idAuthor, imageAuthorUrl: value.imageAuthorUrl })
  }

  const handleCollectionChange = value => {
    updateState({ ...state, collection: value.op })
  }

  return (
    <>
      <MetaTags>
        <title>Añadir libro</title>
        <meta name="description" content="La Fuga Ediciones es un proyecto editorial que nace en 2014 con una propuesta de ficción literaria moderna y universal, en principio centrada en traducciones." />
      </MetaTags>
      <form className="form-class" onSubmit={handleSubmit}>
        <div className="div-class">
          <div>
          <h1 className="align-text-center">Añadir libro</h1>
          </div>
          <p className="label-class">Autor</p>
          <div className="ml-35">
            <Select
              options={authors}
              getOptionLabel={(option) => option.author}
              placeholder={'Elegir Autor'}
              style={
                {
                  height: '40px',
                  width: '80%',
                  maxWidth: '400px',
                  marginLeft: '35px'
                }
              }
              onChange={handleAuthorChange}
            />
          </div>
          <br></br>
          <p className="label-class">Titulo</p>
          <input className="input-class" placeholder="Titulo" type="text" onChange={handleInputChange} name="title" value={state.title || ''} required />
          <p className="label-class">Subtitulo</p>
          <input className="input-class" placeholder="Subtitulo" type="text" onChange={handleInputChange} name="subtitle" value={state.subtitle || ''} />
          <p className="label-class">Introduccion</p>
          <input className="input-class" placeholder="Introduccion" type="text" onChange={handleInputChange} name="introduction" value={state.introduction || ''} />
          <p className="label-class">Traductor</p>
          <input className="input-class" placeholder="Traductor" type="text" onChange={handleInputChange} name="translator" value={state.translator || ''} />
          <p className="label-class">Ilustraciones</p>
          <input className="input-class" placeholder="Ilustraciones" type="text" onChange={handleInputChange} name="illustrations" value={state.illustrations || ''} />
          <p className="label-class">Edición de</p>
          <input className="input-class" placeholder="Edición de" type="text" onChange={handleInputChange} name="editedBy" value={state.editedBy || ''} />
          <p className="label-class">Prologo</p>
          <input className="input-class" placeholder="Prologo" type="text" onChange={handleInputChange} name="prologue" value={state.prologue || ''} />
          <p className="label-class">Formato</p>
          <input className="input-class" placeholder="Formato" type="text" onChange={handleInputChange} name="format" value={state.format || ''} required />
          <p className="label-class">Encuadernacion</p>
          <input className="input-class" placeholder="Encuadernacion" type="text" onChange={handleInputChange} name="binding" value={state.binding || ''} required />
          <p className="label-class">Paginas</p>
          <input className="input-class" placeholder="Paginas" type="text" onChange={handleInputChange} name="pages" value={state.pages || ''} required />
          <p className="label-class">ISBN</p>
          <input className="input-class" placeholder="ISBN" type="text" onChange={handleInputChange} name="isbn" value={state.isbn || ''} required />
          <p className="label-class">PVP</p>
          <input className="input-class" placeholder="PVP" type="text" onChange={handleInputChange} name="pvp" value={state.pvp || ''} required />
          <p className="label-class">Descripción</p>
          <input className="input-class" placeholder="Descripción" type="text" onChange={handleInputChange} name="description" value={state.description || ''} required />
          <br></br>
          <p className="label-class">Colección</p>
          <div className="ml-35">
            <Select
              options={collections}
              getOptionLabel={(option) => option.op}
              placeholder={'Elegir Colección'}
              style={
                {
                  height: '40px',
                  width: '80%',
                  maxWidth: '400px',
                  marginLeft: '35px'
                }
              }
              onChange={handleCollectionChange}
            />
          </div>
          <br></br>
          <p className="label-class">Link a tienda</p>
          <input className="input-class" placeholder="Link a tienda" type="text" onChange={handleInputChange} name="storeUrl" value={state.storeUrl || ''} required />
          <p className="label-class">Portada</p>
          <FileUpload doImageUrl={doImageUrl} fileType="books" required={true} />
          <br></br>
          <p className="label-class">Fecha publicacion</p>
          <p className="p-class">{state.pubDate || ''}</p>
          <DatePicker
            defaultDate={state.pubDate}
            onSelect={handleDateChange}
          />
          <p className="label-class">Empieza a leer</p>
          <FileUpload doImageUrl={doStartReedUrl} fileType="pdfs" required={false} />
          <p className="label-class">Nota de prensa</p>
          <FileUpload doImageUrl={doPressNoteUrl} fileType="pdfs" required={false} />
          <br></br><br></br>
          {/*  <button className="button-class" type="button" onClick={onAddNewsChange}>Añadir Noticia de prensa</button>
          {addNews &&
            <>
              <p className="label-class">Fecha noticia</p>
              <p className="p-class">{news.newsDate || ''}</p>
              <DatePicker
                defaultDate={news.newsDate}
                onSelect={handleDateNewsChange}
              />
              <p className="label-class">Titulo Noticia</p>
              <input className="input-class" placeholder="Titulo Noticia" type="text" onChange={handleNewsInputChange} name="newsTitle" value={news.newsTitle || ''} required />
              <p className="label-class">Link Noticia</p>
              <input className="input-class" placeholder="Link Noticia" type="text" onChange={handleNewsInputChange} name="newsUrl" value={news.newsUrl || ''} />
              <p className="label-class">Importar fichero noticia</p>
              <FileUpload doImageUrl={doNewsNoteUrl} fileType="pdfs" required={false} />
            </>} */}
          <br></br>
          {/* <p className="label-class">Titulo Noticia</p>
          <input className="input-class" placeholder="Titulo Noticia" type="text" onChange={handleInputChange} name="news.newsTitle" value={news.newsTitle || ''} /> */}

          <button className="button-class" type="submit">Guardar</button>
          {state.msg && <h2>Libro añadido con exito</h2>}
        </div>
      </form>
    </>
  );
}

export default AddBook;