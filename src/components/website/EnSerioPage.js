import React from "react";
import MetaTags from 'react-meta-tags';
import BookListEnSerio from './BookListEnSerio'

const EnSerioPage = () => {

    return (
        <>
            <MetaTags>
                <title>En Serio</title>
                <meta name="description" content="La Fuga Ediciones es un proyecto editorial que nace en 2014 con una propuesta de ficción literaria moderna y universal, en principio centrada en traducciones." />
            </MetaTags>
            <div className="content-first-escalones">
                <div className="container col-md-12">
                    <div className="row">
                        <h5 className="title-page-ed">Colección En Serio</h5>
                    </div>
                    <div className="row">
                        <BookListEnSerio />
                    </div>
                </div>
            </div>

        </>
    );
};

export default EnSerioPage;