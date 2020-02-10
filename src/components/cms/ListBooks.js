import React, { useState, useEffect } from 'react';
import { firebaseApp } from '../../firebase';
import BookListItem from './BookListItem'


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
        .then(function(querySnapshot) {
            querySnapshot.forEach(doc => {
              state.listBooks.push({author: doc.data().author, imageUrl: doc.data().imageUrl, title: doc.data().title, idBook: doc.id})
              updateState({...state, ...state.listBooks})
                console.log(state.listBooks);
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
          //updateState(data.docs.map(doc => ({ ...doc.data(), id: doc.id }))); 
    
      }, []);

    return (
        <>
            {state.listBooks.map(item => {
            return <BookListItem key={item.title}  title={item.title} id={item.idBook} />
            })}
        </>
    );
}

export default ListBooks;