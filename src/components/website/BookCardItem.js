import React from "react";
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';


const BookCardItem = ({ pubDate, pvp, title, author, authorId, id, imageUrl }) => {
    return (
        <>

            <Link to={`/autor/${authorId}`} style={{ textDecoration: 'none' }}>
                <p className="link-author">{author.toUpperCase()}</p>
            </Link>
            <p className="book-title">{title}</p>
            <Link to={`/book/${id}`} style={{ textDecoration: 'none' }}>
                {imageUrl && <div>
                    <LazyLoad height="180">
                        <img src={imageUrl}  height="180" alt={`foto ${title}`} />
                    </LazyLoad>
                </div>}
            </Link>
            <p className="bottom-title" >EN LIBRERÍAS A PARTIR DE: <br />
                {pubDate}</p>
            <p className="bottom-price" >PVP: {pvp} €</p>



        </>
    );
};

export default BookCardItem;