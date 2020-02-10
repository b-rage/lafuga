import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { firebaseApp } from '../../firebase';
import '@trendmicro/react-datepicker/dist/react-datepicker.css';



const AutorPage = (props) => {

    const [state, updateState] = useState({
        author: '',
        description: '',
        imageAuthorUrl: '',
        dateAuthor: '',
        listAuthors: []
    });

    useEffect(() => {

        const db = firebaseApp.firestore();
        db.collection(`authors`).doc(`${props.id}`)
            .get()
            .then(function (doc) {
                updateState({author: doc.data().author, description: doc.data().description, imageAuthorUrl: doc.data().imageAuthorUrl, dateAuthor: doc.data().dateAuthor,})
                    console.log('AUTORES', doc.data());

            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });
        //updateState(data.docs.map(doc => ({ ...doc.data(), id: doc.id }))); 

    }, []);



    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Autor</title>

            </Helmet>
            <div id="content-home">
                <div className="container">
                    <div className="col-md-12">
                        <div className="col-md-6">
                            <div className="box1">
                                <div id="u120-8" className="clearfix colelem">
                                    <p id="u120-2">{state.author}</p>
                                    <p id="u120-4">{state.dateAuthor}</p>
                                    <div>{state.description} </div>
                                    <div id="u121-7" className="clearfix colelem">
                                        <span id="u121">Títulos:</span><a href="el-tesoro.html"> El tesoro de
                      Franchard</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6"> <img src={state.imageAuthorUrl}
                            alt="foto Robert Louis Stevenson" width="170" height="181" /> <a href={state.imageAuthorUrl}>
                                <img id="descarga_foto_autor" src="img/descargas_foto_autor.png" width="147" height="38" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
}

export default AutorPage;