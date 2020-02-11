import React, { useState, useEffect } from 'react';
import { firebaseApp } from '../../firebase';
import '@trendmicro/react-datepicker/dist/react-datepicker.css';
import FileUpload from './FileUpload';


const AddAuthor = () => {

  const [state, updateState] = useState({
    author: '',
    description: '',
    imageAuthorUrl: '',
    dateAuthor: '',
    msg: false
  });

  const db = firebaseApp.firestore();


  const handleInputChange = e => {
    updateState({ ...state, [e.target.name]: e.target.value, msg: false })
  }

  const doImageAuthorUrl = (url) => {
    updateState({ ...state, imageAuthorUrl: url })
  }

  const handleSubmit = e => {
    e.preventDefault();

    // Add a new document in collection "books"
    db.collection("authors").add({      
      author: state.author,
      description: state.description,
      imageAuthorUrl: state.imageAuthorUrl,
      dateAuthor: state.dateAuthor
    })
    .then(() => {
        updateState({ ...state, msg: true })
      })
      .catch(error => {
        console.error("Error writing document: ", error);
      });      
  }

  return (
    <>

      <form className="form-class" onSubmit={handleSubmit}>
        <div className="div-class">
          <h1 className="ml-35">Añadir Autor</h1>
          <p className="label-class">Autor</p>
          <input className="input-class" placeholder="Autor" type="text" onChange={handleInputChange} name="author" value={state.author || ''} required />  
          <p className="label-class">Fecha nacimiento/muerte autor</p>
          <input className="input-class" placeholder="Fecha" type="text" onChange={handleInputChange} name="dateAuthor" value={state.dateAuthor || ''} />         
          <p className="label-class">Descripción</p>
          <input className="input-class" placeholder="Descripción" type="text" onChange={handleInputChange} name="description" value={state.description || ''} required />
          <p className="label-class">Foto Autor</p>
          <FileUpload doImageUrl={doImageAuthorUrl} fileType="authors" required={false}/>
          <br></br>       
          <button className="button-class" type="submit">Guardar</button>
          {state.msg && <h2>Autor añadido con exito</h2>}
        </div>
      </form>


    </>
  );
}

export default AddAuthor;