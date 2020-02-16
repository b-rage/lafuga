import React, { useState, useEffect } from 'react';
import { firebaseApp } from '../../firebase';
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

      const [listEnSerio, setListEnSerio] = useState([])
    
      useEffect(() => {
    
        const db = firebaseApp.firestore();
        db.collection("books")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(doc => {
              state.listBooks.push({author: doc.data().author, collection: doc.data().collection, authorId: doc.data().authorId, pubDate: doc.data().pubDate, imageUrl: doc.data().imageUrl, title: doc.data().title, pvp: doc.data().pvp, idBook: doc.id})
              updateState({...state, ...state.listBooks})
            });
        })
        .then(() => {
            const result = state.listBooks.filter(word => word.collection === 'En Serio');
            setListEnSerio(result)
        })
        .then(() => {
            console.log('object', listEnSerio)
            if(listEnSerio.lenght > 1) {

                listEnSerio.forEach(item => {
                    item.pubDate.moment(`${item.pubDate}`, 'DD/MM/YYYY').format('YYYY/MM/DD');
                })
                const _arr = listEnSerio.sort(function compare(a, b) {
                    let dateA = new Date(a.pubDate);
                    let dateB = new Date(b.pubDate);
                    return dateA - dateB;
                });
                _arr.reverse().forEach(item => {
                    item.pubDate = moment(`${item.pubDate}`, 'YYYY/MM/DD').format('DD/MM/YYYY');
                })
                setListEnSerio(_arr)
            }else{
                listEnSerio.forEach(item => {
                    item.pubDate = moment(`${item.pubDate}`, 'YYYY/MM/DD').format('DD/MM/YYYY');
                })
            }
        })
        /* .then(() => {
            if(listEnSerio.lenght > 1) {
                const _arr = listEnSerio.sort(function compare(a, b) {
                    let dateA = new Date(a.pubDate);
                    let dateB = new Date(b.pubDate);
                    return dateA - dateB;
                });
                _arr.reverse().forEach(item => {
                    item.pubDate = moment(`${item.pubDate}`, 'YYYY/MM/DD').format('DD/MM/YYYY');
                })
                setListEnSerio(_arr)
            }else{
                listEnSerio.forEach(item => {
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
            {listEnSerio.map(item => {

            return <div className="col-md-3 book-card" key={item.title}>
                <BookCardItem key={item.title}  title={item.title} id={item.idBook} pubDate={item.pubDate} pvp={item.pvp} author={item.author} authorId={item.authorId} imageUrl={item.imageUrl}/>
            </div> 
            })}
        </>
    );
}

export default BookListEnSerio;