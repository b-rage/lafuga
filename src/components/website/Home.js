import React from "react";
import "@trendmicro/react-datepicker/dist/react-datepicker.css";
import MetaTags from 'react-meta-tags';
import BookList from './BookList'

const Home = () => {

  return (
    <>
      <MetaTags>
        <title>La Fuga ediciones</title>
        <meta name="description" content="La Fuga Ediciones es un proyecto editorial que nace en 2014 con una propuesta de ficción literaria moderna y universal, en principio centrada en traducciones." />
      </MetaTags>
      <div className="content-first-home">
        <div className="container col-md-12">
          <div className="row">

            <BookList />

          </div>
        </div>
      </div>

    </>
  );
};

export default Home;