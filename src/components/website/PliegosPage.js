import React from "react";
import MetaTags from 'react-meta-tags';
import BookListPliegos from './BookListPliegos'

const PliegosPage = () => {

    return (
        <>
            <MetaTags>
                <title>Pliegos Sueltos</title>
                <meta name="description" content="La Fuga Ediciones es un proyecto editorial que nace en 2014 con una propuesta de ficción literaria moderna y universal, en principio centrada en traducciones." />
            </MetaTags>
            <div className="content-first-enserio">
                <div className="container col-md-12">
                    <div className="row">
                        <h5 className="title-page-ed">Pliegos Sueltos</h5>
                    </div>
                    <div className="row">
                        <BookListPliegos />
                    </div>
                </div>
            </div>

        </>
    );
};

export default PliegosPage;