import React, { useState, useEffect } from 'react';
import { firebaseApp } from '../../firebase';
import BookCardItem from './BookCardItem'


const BookListEscalones = () => {

    const [state, updateState] = useState({ 
        imageUrl: '',
        author: '',
        authorId: '',
        title: '',
        idBook: '',
        pubDate:'',
        pvp: '',
        listBooks: []
      });
    
      useEffect(() => {
    
        const db = firebaseApp.firestore();
        db.collection("books")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(doc => {
              state.listBooks.push({author: doc.data().author, authorId: doc.data().authorId, pubDate: doc.data().pubDate, imageUrl: doc.data().imageUrl, title: doc.data().title, pvp: doc.data().pvp, idBook: doc.id})
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

            return <div className="col-md-3 book-card">
                <BookCardItem key={item.title}  title={item.title} id={item.idBook} pubDate={item.pubDate} pvp={item.pvp} author={item.author} authorId={item.authorId} imageUrl={item.imageUrl}/>
            </div> 
            })}
        </>
    );
}

export default BookListEscalones;