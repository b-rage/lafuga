import React from 'react';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom'

const BooksPage = () => {
    return (

        <>
            <MetaTags>
                <title>Libros</title>
                <meta name="description" content="La Fuga Ediciones es un proyecto editorial que nace en 2014 con una propuesta de ficción literaria moderna y universal, en principio centrada en traducciones." />
            </MetaTags>
            <div className="content-first-books">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-1 col-md-1 col-lg-3"> </div>
                        <div className="col-xs-12 col-sm-5 col-md-5 col-lg-3">
                            <Link to={`libros/escalones`} style={{ textDecoration: 'none' }}>
                                <img id="escalones_logo" src="./escalones_logo.png" width="210" height="123" alt="escalones logo" />

                            </Link>

                            <p className="collecion">Colección</p>
                            <p className="escalones">Escalones</p>
                            <p className="text_book_lib">Colección de narrativa con la que queremos construir nuestro catálogo. Aquí publicaremos a todos aquellos autores que nos han gustado y que
            queremos compartir con nuestros lectores, sin ningún compromiso de género.</p>
                        </div>
                        <div className="col-xs-12 col-sm-5 col-md-5 col-lg-3">
                            <Link to={`libros/en-serio`} style={{ textDecoration: 'none' }}>
                                <img id="enserio_logo" src="./enserio_logo.png" width="210" height="123" alt="en serio logo" />
                            </Link>
                            <p className="collecion">Colección</p>
                            <p className="escalones">En Serio</p>
                            <p className="text_book_lib">Desde que la editorial era solo una idea
                              hemos tenido claro que nuestra misión
                              era recuperar las joyas de la literatura
                              humorística de todo el mundo.
                              Desde los clásicos del humour anglosajón
                            hasta los autores de nueva generación.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-1 col-md-1 col-lg-3"></div>
                        <div className="col-xs-12 col-sm-5 col-md-5 col-lg-3">
                            <Link to={`libros/humoris`} style={{ textDecoration: 'none' }}><img id="enserio_logo" src="./humoris_logo.png" width="210" height="123" alt="Humoris Causa logo" /></Link>
                            <p className="collecion">Colección</p>
                            <p className="escalones">Humoris Causa</p>
                            <p className="text_book_lib">Nueva colección de volúmenes que toman el humor como hilo conductor. Cada uno recoge una serie de cuentos de grandes autores del panorama actual; historias que van desde el humor más negro hasta el más ingenuo.</p>
                        </div>

                     
                        <div className="col-xs-12 col-sm-5 col-md-5 col-lg-3">
                            <Link to={`libros/pliegos-sueltos`} style={{ textDecoration: 'none' }}><img id="enserio_logo" src="./pliegos_logo.jpg" width="210" height="123" alt="Pliegos Sueltos logo" /></Link>
                            <p className="collecion">Colección</p>
                            <p className="escalones">Pliegos Sueltos</p>
                            {/* <p className="text_book_lib">Nueva colección de volúmenes que toman el humor como hilo conductor. Cada uno recoge una serie de cuentos de grandes autores del panorama actual; historias que van desde el humor más negro hasta el más ingenuo.</p> */}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}

export default BooksPage;