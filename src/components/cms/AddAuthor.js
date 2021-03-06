import React, { useState } from 'react';
import '@trendmicro/react-datepicker/dist/react-datepicker.css';
import FileUpload from './FileUpload';
import MetaTags from 'react-meta-tags';


const AddAuthor = () => {

  const [state, updateState] = useState({
    author: '',
    description: '',
    imageAuthorUrl: '',
    dateAuthor: '',
    msg: false
  });

  const handleInputChange = e => {
    updateState({ ...state, [e.target.name]: e.target.value, msg: false })
  }

  const doImageAuthorUrl = (url) => {
    updateState({ ...state, imageAuthorUrl: url })
  }

  const handleSubmit = e => {
    e.preventDefault();

    fetch('https://us-central1-lafuga-8ef6d.cloudfunctions.net/app/api/authors', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        author: state.author,
        description: state.description,
        imageAuthorUrl: state.imageAuthorUrl,
        dateAuthor: state.dateAuthor
      }),
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
      <MetaTags>
        <title>Añadir autor</title>
        <meta name="description" content="La Fuga Ediciones es un proyecto editorial que nace en 2014 con una propuesta de ficción literaria moderna y universal, en principio centrada en traducciones." />
      </MetaTags>
      <form className="form-class" onSubmit={handleSubmit}>
        <div className="div-class">
          <div>
            <h1 className="align-text-center">Añadir Autor</h1>
          </div>
          <p className="label-class">Autor</p>
          <input className="input-class" placeholder="Autor" type="text" onChange={handleInputChange} name="author" value={state.author || ''} required />
          <p className="label-class">Fecha nacimiento/muerte autor</p>
          <input className="input-class" placeholder="Fecha" type="text" onChange={handleInputChange} name="dateAuthor" value={state.dateAuthor || ''} />
          <p className="label-class">Descripción</p>
          <input className="input-class" placeholder="Descripción" type="text" onChange={handleInputChange} name="description" value={state.description || ''} required />
          <p className="label-class">Foto Autor</p>
          <h5 className="align-text-center">la foto de autor tiene que ser cuadrada sino destroza el diseño, minimo 200x200px</h5>
          <FileUpload doImageUrl={doImageAuthorUrl} fileType="authors" required={false} />
          <br></br>
          <button className="button-class" type="submit">Guardar</button>
          {state.msg && <h2>Autor añadido con exito</h2>}
        </div>
      </form>


    </>
  );
}

export default AddAuthor;