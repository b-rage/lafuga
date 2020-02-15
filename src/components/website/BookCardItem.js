import React from "react";
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';


const BookCardItem = ({ pubDate, pvp, title, author, authorId, id, imageUrl }) => {
    return (
        <>
            <div className="book-card-container">
                <div className="book-title-conntainer">
                    <p className="book-title">{title}</p>
                </div>
                <Link to={`/autor/${authorId}`} style={{ textDecoration: 'none' }}>
                    <p className="link-author">{author.toUpperCase()}</p>
                </Link>
                <Link to={`/book/${id}`} style={{ textDecoration: 'none' }}>
                    {imageUrl && <div>
                        <LazyLoad height="250">
                            <img src={imageUrl} height="250" alt={`foto ${title}`} />
                        </LazyLoad>
                    </div>}
                </Link>
                <p className="bottom-title" >EN LIBRERÍAS A PARTIR DE: <br />
                    {pubDate}</p>
                <p className="bottom-price" >PVP: {pvp} €</p>
            </div>

        </>
    );
};

export default BookCardItem;