import React, { useState, useEffect } from 'react';
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

        fetch(
            `https://us-central1-lafuga-8ef6d.cloudfunctions.net/app/api/books`,
            {
                method: "GET",
            }
            )
        .then(res => res.json())
        .then(response => {
            response.forEach(doc => {
                state.listBooks.push({ author: doc.author, imageUrl: doc.imageUrl, title: doc.title, idBook: doc.id })
                updateState({ ...state, ...state.listBooks })
            });
        })
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        });


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