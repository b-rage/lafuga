import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { StorageProvider } from "./context/Storage";
import Dashboard from './components/cms/Dashboard';
import Login from './components/cms/Login';
import ListNews from './components/cms/ListNews';
import AddNews from './components/cms/AddNews';
import ListAuthors from './components/website/ListAuthors';
import AuthorsPage from './components/website/AuthorPage';
import NavBarComponent from './components/website/NavBarComponent.jsx';
import Editorial from './components/website/Editorial'
import FooterPage from './components/website/FooterPage';
import Home from './components/website/Home';
import ContactPage from './components/website/ContactPage';
import BooksPage from './components/website/BooksPage';
import EscalonesPage from './components/website/EscalonesPage';
import DistribucionPage from './components/website/DistribucionPage'
import EditBook from './components/cms/EditBook';
import EnSerioPage from './components/website/EnSerioPage';
import HumorisPage from './components/website/HumorisPage';
import BookPage from './components/website/BookPage';
import { useUser } from 'reactfire';

const App = () => {

  const use = useUser();
  return (
    <div className="App">
      <NavBarComponent />
      <StorageProvider>
        <Route path="/login" render={() => <Login />} />
        {use && <>
        <Route exact path="/dashboard/" render={() => <Dashboard />} />
        <Route exact path="/dashboard/news/:id/add-news" render={(props) => <AddNews id={props.match.params.id} />} />
        <Route exact path="/dashboard/news/:id" render={(props) => <ListNews id={props.match.params.id} />} />
        <Route exact path="/dashboard/edit-book/:id" render={(props) => <EditBook id={props.match.params.id} />} />
        </>}
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/autores" render={() => <ListAuthors />} />
        <Route exact path="/autor/:id" render={(props) => <AuthorsPage id={props.match.params.id} />} />
        <Route exact path="/libro/:id" render={(props) => <BookPage id={props.match.params.id} />} />
        <Route exact path="/editorial" render={() => <Editorial />} />
        <Route exact path="/contacto" render={() => <ContactPage />} />
        <Route exact path="/distribucion" render={() => <DistribucionPage />} />
        <Route exact path="/libros" render={() => <BooksPage />} />
        <Route exact path="/libros/escalones" render={() => <EscalonesPage />} />
        <Route exact path="/libros/en-serio" render={() => <EnSerioPage />} />
        <Route exact path="/libros/humoris" render={() => <HumorisPage />} />
        <FooterPage />
      </StorageProvider>


    </div>
  );
}

export default withRouter(App);
