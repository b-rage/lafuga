import React, { useState, useEffect } from "react";
import { firebaseApp } from "../../firebase";
import moment from "moment";
import DatePicker from "@trendmicro/react-datepicker";
import "@trendmicro/react-datepicker/dist/react-datepicker.css";
import FileUpload from "./FileUpload";
import { useHistory } from 'react-router';



const AddNews = ({ props, id }) => {
  const db = firebaseApp.firestore();
  const history = useHistory();

  const [news, updateNews] = useState({
    newsTitle: "",
    newsDate: moment(new Date(Date.now())).format("YYYY-MM-DD"),
    newsUrl: "",
    newsFileUrl: "",
  });

  const handleSubmit = e => {
    e.preventDefault();

    db.collection(`books/${id}/news`)
      .add({
        newsTitle: news.newsTitle,
        newsDate: news.newsDate,
        newsUrl: news.newsUrl,
        newsFileUrl: news.newsFileUrl
      })
      .then(() => {
        console.log("Document successfully written!");
        history.push(`/dashboard/news/${id}`)
      })
      .catch(error => {
        console.error("Error writing document: ", error);
      });
  };

  const handleNewsInputChange = e => {
    updateNews({ ...news, [e.target.name]: e.target.value });
  };

  const doNewsNoteUrl = url => {
    updateNews({ ...news, newsFileUrl: url });
  };

  const handleDateNewsChange = e => {
    updateNews({ ...news, newsDate: moment(new Date(e)).format("DD/MM/YYYY") });
  };


  return (
    <>
      <form className="form-class" onSubmit={handleSubmit}>
        <div className="div-class">
          <div>
            <h1 className="align-text-center">Añadir Nueva Noticia de prensa</h1>
          </div>
          <p className="label-class">Fecha noticia</p>
          <p className="p-class">{news.newsDate || ""}</p>
          <DatePicker
            defaultDate={news.newsDate}
            onSelect={handleDateNewsChange}
          />
          <p className="label-class">Titulo Noticia</p>
          <input
            className="input-class"
            placeholder="Titulo Noticia"
            type="text"
            onChange={handleNewsInputChange}
            name="newsTitle"
            value={news.newsTitle || ""}
            required
          />
          <p className="label-class">Link Noticia</p>
          <input
            className="input-class"
            placeholder="Link Noticia"
            type="text"
            onChange={handleNewsInputChange}
            name="newsUrl"
            value={news.newsUrl || ""}
            
          />
          <p className="label-class">Importar fichero noticia</p>
          <FileUpload
            doImageUrl={doNewsNoteUrl}
            fileType="pdfs"
            required={false}
          />
          <button className="button-class" type="submit">
            Guardar
          </button>
        </div>
      </form>
    </>
  );
};

export default AddNews;
