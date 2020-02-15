import React from "react";
import MetaTags from 'react-meta-tags';
import BookListEscalones from './BookListEscalones'

const EscalonesPage = () => {





    return (
        <>
            <MetaTags>
                <title>Escalones</title>
                <meta name="description" content="La Fuga Ediciones es un proyecto editorial que nace en 2014 con una propuesta de ficción literaria moderna y universal, en principio centrada en traducciones." />
            </MetaTags>
            <div className="content-first-escalones">
                <div className="container col-md-12">
                    <div className="row">
                        <h5 className="title-page-ed">Colección Escalones</h5>
                    </div>
                    <div className="row">
                        <BookListEscalones />
                    </div>
                </div>
            </div>

        </>
    );
};

export default EscalonesPage;