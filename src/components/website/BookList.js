import React, { useState, useEffect } from 'react';
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
    const [catalogue, setCatalogue] = useState('')

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
                    state.listBooks.push({ author: doc.author, authorId: doc.authorId, pubDate: doc.pubDate, imageUrl: doc.imageUrl, title: doc.title, pvp: doc.pvp, idBook: doc.id })
                    updateState({ ...state, ...state.listBooks })
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
            .then(() => {
                fetch(
                    `https://us-central1-lafuga-8ef6d.cloudfunctions.net/app/api/catalogue/3HvTVtJ6UWRwVsvNN9d3`,
                    {
                      method: "GET",
                    }
                  )
                .then(res => res.json())
                .then(response => {
                    setCatalogue(response.catalogueFileUrl)
                })
                .catch(function (error) {
                    console.log("Error getting documents: ", error);
                });
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
            <div className="middle">
            <a href={catalogue}>
                <button className="button-class-home">Descarga nuestro Catálogo</button>
                </a>
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