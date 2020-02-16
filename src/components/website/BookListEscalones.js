import React, { useState, useEffect } from 'react';
import { firebaseApp } from '../../firebase';
import BookCardItem from './BookCardItem';
import moment from "moment";


const BookListEscalones = () => {

    const [state, updateState] = useState({ 
        imageUrl: '',
        author: '',
        authorId: '',
        title: '',
        collection: '',
        idBook: '',
        pubDate:'',
        pvp: '',
        listBooks: [],
        listEscalones: []
      });
    
      useEffect(() => {
    
        const db = firebaseApp.firestore();
        db.collection("books")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(doc => {
              state.listBooks.push({author: doc.data().author, collection: doc.data().collection, authorId: doc.data().authorId, pubDate: doc.data().pubDate, imageUrl: doc.data().imageUrl, title: doc.data().title, pvp: doc.data().pvp, idBook: doc.id})
              updateState({...state, ...state.listBooks})
            });
            const result = state.listBooks.filter(word => word.collection === 'Escalones');
            updateState({ ...state, listEscalones: result });
        })
/*         .then(() => {
            state.listEscalones.forEach(item => {
                item.pubDate = moment(`${item.pubDate}`, 'DD/MM/YYYY').format('YYYY/MM/DD');
            })
        })
        .then(() => {
            if(state.listEscalones.length > 1) {
                const _arr = state.listEscalones.sort(function compare(a, b) {
                    let dateA = new Date(a.pubDate);
                    let dateB = new Date(b.pubDate);
                    return dateA - dateB;
                });
                _arr.reverse().forEach(item => {
                    item.pubDate = moment(`${item.pubDate}`, 'YYYY/MM/DD').format('DD/MM/YYYY');
                })
                updateState({ ...state, listEscalones: _arr })
            }else{
                state.listEscalones.forEach(item => {
                    item.pubDate = moment(`${item.pubDate}`, 'YYYY/MM/DD').format('DD/MM/YYYY');
                })
            }
        }) */
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        });
          //updateState(data.docs.map(doc => ({ ...doc.data(), id: doc.id }))); 
    
      }, []);

      

    return (
        <>
            {state.listEscalones.map(item => {

            return <div className="col-md-3 book-card" key={item.title}>
                <BookCardItem key={item.title}  title={item.title} id={item.idBook} pubDate={item.pubDate} pvp={item.pvp} author={item.author} authorId={item.authorId} imageUrl={item.imageUrl}/>
            </div> 
            })}
        </>
    );
}

export default BookListEscalones;