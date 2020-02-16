import React, { useState, useEffect } from 'react';
import { firebaseApp } from '../../firebase';
import BookListItem from './BookListItem';
import MetaTags from 'react-meta-tags';


const ListBooks = () => {

    const [state, updateState] = useState({
        imageUrl: '',
        author: '',
        title: '',
        idBook: '',
        listBooks: []
    });

    useEffect(() => {

        const db = firebaseApp.firestore();
        db.collection("books")
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(doc => {
                    state.listBooks.push({ author: doc.data().author, imageUrl: doc.data().imageUrl, title: doc.data().title, idBook: doc.id })
                    updateState({ ...state, ...state.listBooks })
                    console.log(state.listBooks);
                });
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });
        //updateState(data.docs.map(doc => ({ ...doc.data(), id: doc.id }))); 

    }, []);

    return (
        <>
            <MetaTags>
                <title>Libros</title>
                <meta name="description" content="La Fuga Ediciones es un proyecto editorial que nace en 2014 con una propuesta de ficción literaria moderna y universal, en principio centrada en traducciones." />
            </MetaTags>
            <h1 className="align-text-center">Lista Libros</h1>
            <br></br>
            {state.listBooks.map(item => {
                return <BookListItem key={item.title} title={item.title} id={item.idBook} />
            })}
        </>
    );
}

export default ListBooks;