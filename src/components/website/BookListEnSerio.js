import React, { useState, useEffect } from 'react';
import BookCardItem from './BookCardItem';
import moment from "moment";


const BookListEnSerio = () => {

    const [state, updateState] = useState({ 
        imageUrl: '',
        author: '',
        authorId: '',
        title: '',
        collection: '',
        idBook: '',
        pubDate:'',
        pvp: '',
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
                state.listBooks.push({ author: doc.author, collection: doc.collection, authorId: doc.authorId, pubDate: doc.pubDate, imageUrl: doc.imageUrl, title: doc.title, pvp: doc.pvp, idBook: doc.id })
                updateState({ ...state, ...state.listBooks })
            });
        })
        .then(() => {
            state.listBooks.forEach(item => {
                item.pubDate = moment(`${item.pubDate}`, 'DD/MM/YYYY').format('YYYY/MM/DD');
            })
            state.listBooks.sort(function compare(a, b) {
                let dateA = new Date(a.pubDate);
                let dateB = new Date(b.pubDate);
                return dateA - dateB;
            });
            state.listBooks.reverse().forEach(item => {
                item.pubDate = moment(`${item.pubDate}`, 'YYYY/MM/DD').format('DD/MM/YYYY');
            })           
        })
        .then(() => {
            const result = state.listBooks.filter(word => word.collection === 'En Serio');
            updateState({...state, listBooks: result})

        })
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        });
    
      }, []);

      

    return (
        <>
            {state.listBooks.map(item => {

            return <div className="col-md-3 book-card" key={item.title}>
                <BookCardItem key={item.title}  title={item.title} id={item.idBook} pubDate={item.pubDate} pvp={item.pvp} author={item.author} authorId={item.authorId} imageUrl={item.imageUrl}/>
            </div> 
            })}
        </>
    );
}

export default BookListEnSerio;