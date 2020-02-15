import React from "react";
import "@trendmicro/react-datepicker/dist/react-datepicker.css";
import MetaTags from 'react-meta-tags';
import BookList from './BookList'

const Home = () => {

  /*  const [listAuthors, setListAuthors] = useState([])

 useEffect(() => {
    const db = firebaseApp.firestore();
    db.collection("authors")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(doc => {
          listAuthors.push(doc.data());
          setListAuthors([...listAuthors]);
        });
      })
      .then(() => {
        const _listAuthors = JSON.stringify(listAuthors)
        props.context.setListAuthors(listAuthors)
        window.sessionStorage.setItem('listAuthors', _listAuthors);
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }, []); */



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