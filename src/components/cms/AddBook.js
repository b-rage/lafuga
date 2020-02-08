import React, { useState, useEffect } from 'react';
import { firebaseApp } from '../../firebase';
import moment from 'moment';
import DatePicker from '@trendmicro/react-datepicker';
import '@trendmicro/react-datepicker/dist/react-datepicker.css';
import FileUpload from './FileUpload';


const AddBook = () => {

  const [state, updateState] = useState({
    author: '',
    title: '',
    subtitle: '',
    introduction: '',
    translator: '',
    prologue: '',
    format: '',
    binding: '',
    pages: '',
    isbn: '',
    pvp: '',
    pubDate: moment('2014-03-09').format('YYYY-MM-DD'),
    imageUrl: '',
  });

  const db = firebaseApp.firestore();


  const handleInputChange = e => {
    updateState({ ...state, [e.target.name]: e.target.value })
  }

  const handleDateChange = e => {
    updateState({ ...state, pubDate: moment(new Date(e)).format("DD/MM/YYYY") })
  };


  const doImageUrl = (url) => {
    updateState({ ...state, imageUrl: url })
  }
  const handleSubmit = e => {
    e.preventDefault();

    // Add a new document in collection "books"
    db.collection("books").doc().set({
      imageUrl: state.imageUrl,
      author: state.author,
      title: state.title,
      pubDate: state.pubDate
    })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch(error => {
        console.error("Error writing document: ", error);
      });
  }

  return (
    <>

      <form className="form-class" onSubmit={handleSubmit}>
        <div className="div-class">
          <p className="label-class">Autor</p>
          <input className="input-class" placeholder="Autor" type="text" onChange={handleInputChange} name="author" value={state.author || ''} required />
          <p className="label-class">Titulo</p>
          <input className="input-class" placeholder="Titulo" type="text" onChange={handleInputChange} name="title" value={state.title || ''} required />
          <p className="label-class">Subtitulo</p>
          <input className="input-class" placeholder="Subtitulo" type="text" onChange={handleInputChange} name="subtitle" value={state.subtitle || ''} />
          <p className="label-class">Introduccion</p>
          <input className="input-class" placeholder="Introduccion" type="text" onChange={handleInputChange} name="introduction" value={state.introduction || ''} />
          <p className="label-class">Traductor</p>
          <input className="input-class" placeholder="Traductor" type="text" onChange={handleInputChange} name="translator" value={state.translator || ''} required />
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
          <p className="label-class">Portada</p>
          <FileUpload doImageUrl={doImageUrl} fileType="books" />
          <br></br>
          <p className="label-class">Fecha publicacion</p>
          <DatePicker
            defaultDate={state.pubDate}
            onSelect={handleDateChange}
          />
          {/* <input className="input-class" placeholder="Publication Date" type="text" onChange={handleDateChange} value={moment(new Date(state.pubDate)).format("DD/MM/YYYY") || ''} /> */}
          <button className="button-class" type="submit">Guardar</button>
        </div>
      </form>


    </>
  );
}

export default AddBook;