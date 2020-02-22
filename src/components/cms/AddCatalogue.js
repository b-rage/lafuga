import React, { useState } from "react";
import { firebaseApp } from "../../firebase";
import "@trendmicro/react-datepicker/dist/react-datepicker.css";
import FileUpload from "./FileUpload";
import { useHistory } from 'react-router';



const AddCatalogue = ({ props, id }) => {
  const db = firebaseApp.firestore();
  const history = useHistory();

  const [catalogue, updateCatalogue] = useState({
    catalogueFileUrl: "",
  });

  const handleSubmit = e => {
    e.preventDefault();

    db.collection(`catalogue`)
      .add({
        catalogueFileUrl: catalogue.catalogueFileUrl
      })
      .then(() => {
        console.log("Document successfully written!");
        history.push(`/dashboard/list-book`)
      })
      .catch(error => {
        console.error("Error writing document: ", error);
      });
  };



  const doCatalogueUrl = url => {
    updateCatalogue({ ...catalogue, catalogueFileUrl: url });
  };





  return (
    <>
      <form className="form-class" onSubmit={handleSubmit}>
        <div className="div-class">
          <div>
            <h1 className="align-text-center">Añadir Catalogo</h1>
            <br></br>
            <h5 className="align-text-center">el fichero del catalogo tiene que llamarse: LaFugaEdiciones-catalogo.pdf</h5>
          </div>
          <FileUpload
            doImageUrl={doCatalogueUrl}
            fileType="pdfs"
            required={true}
          />
          <button className="button-class" type="submit">
            Guardar
          </button>
        </div>
      </form>
    </>
  );
};

export default AddCatalogue;
