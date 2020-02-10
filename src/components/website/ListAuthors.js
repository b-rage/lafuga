import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { firebaseApp } from '../../firebase';
import '@trendmicro/react-datepicker/dist/react-datepicker.css';
import AuthorsCardItem from './AuthorsCardItem'



const ListAuthors = () => {

    const [state, updateState] = useState({ 
        author: '',
        description: '',
        imageAuthorUrl: '',
        dateAuthor: '',
        idAuthor:'',
        listAuthors: []
      });

    useEffect(() => {
    
        const db = firebaseApp.firestore();
        db.collection("authors")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(doc => {
              state.listAuthors.push({author: doc.data().author, imageAuthorUrl: doc.data().imageAuthorUrl, description: doc.data().description, dateAuthor: doc.data().dateAuthor, idAuthor: doc.id})
              updateState({...state, ...state.listAuthors})
                console.log('AUTORES',state.listAuthors);
            });
        })
        .catch(function(error) {
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
            <h1 className="ml-35">Autores</h1>
            <br></br>
            {state.listAuthors.map(item => {
            return <AuthorsCardItem key={item.author}  author={item.author} id={item.idAuthor} />
            })}



        </>
    );
}

export default ListAuthors;