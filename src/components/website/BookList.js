import React, { useState, useEffect } from 'react';
import { firebaseApp } from '../../firebase';
import BookCardItem from './BookCardItem';
import moment from "moment";


const BookList = () => {

    const [state, updateState] = useState({
        imageUrl: '',
        author: '',
        authorId: '',
        title: '',
        idBook: '',
        pubDate: '',
        pvp: '',
        listBooks: []
    });

    const [arrRowFirst, setArrRowFirst] = useState([])
    const [arrRowSecond, setArrRowSecond] = useState([])

    useEffect(() => {

        const db = firebaseApp.firestore();
        db.collection("books")
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(doc => {
                    state.listBooks.push({ author: doc.data().author, authorId: doc.data().authorId, pubDate: doc.data().pubDate, imageUrl: doc.data().imageUrl, title: doc.data().title, pvp: doc.data().pvp, idBook: doc.id })
                    updateState({ ...state, ...state.listBooks })
                    console.log(state.listBooks);
                });
            })
            .then(() => {
                state.listBooks.forEach(item => {
                    item.pubDate = moment(`${item.pubDate}`, 'DD/MM/YYYY').format('YYYY/MM/DD');
                })
            })
            .then(() => {
                const _arr = state.listBooks.sort(function compare(a, b) {
                    let dateA = new Date(a.pubDate);
                    let dateB = new Date(b.pubDate);
                    return dateA - dateB;
                });
                _arr.reverse().forEach(item => {
                    item.pubDate = moment(`${item.pubDate}`, 'YYYY/MM/DD').format('DD/MM/YYYY');
                })
                const _arrRowFirst = _arr.slice(0, 4)
                const _arrRowSecond = _arr.slice(4, 8)
                setArrRowFirst(_arrRowFirst)
                setArrRowSecond(_arrRowSecond)
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });
        //updateState(data.docs.map(doc => ({ ...doc.data(), id: doc.id }))); 

    }, []);



    return (
        <div className="col-md-12">
            <div className="row">
                {arrRowFirst.map(item => {
                    return <div className="col-md-3 book-card" key={item.idBook}>
                        <BookCardItem key={item.idBook} title={item.title} id={item.idBook} pubDate={item.pubDate} pvp={item.pvp} author={item.author} authorId={item.authorId} imageUrl={item.imageUrl} />
                    </div>
                })}
            </div>
            <br></br>
            <div className="row middle">
                <button className="button-class-home">Descarga nuestro Catálogo</button>
            </div>
            <br></br>
            <div className="row">
                {arrRowSecond.map(item => {

                    return <div className="col-md-3 book-card" key={item.idBook}>
                        <BookCardItem key={item.idBook} title={item.title} id={item.idBook} pubDate={item.pubDate} pvp={item.pvp} author={item.author} authorId={item.authorId} imageUrl={item.imageUrl} />
                    </div>
                })}
            </div>
        </div>
    );
}

export default BookList;