import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { StorageProvider } from "./context/Storage";
import Dashboard from './components/cms/Dashboard';
import Login from './components/cms/Login';
import BookNews from './components/cms/BookNews';
import ListAuthors from './components/website/ListAuthors';
import AuthorsPage from './components/website/AuthorPage';
import NavBarComponent from './components/website/NavBarComponent.jsx';
import Editorial from './components/website/Editorial'
import FooterPage from './components/website/FooterPage';


const App = () => {

  return (
    <div className="App">
              <NavBarComponent />
      <StorageProvider>
        <Route path="/login" render={() => <Login  /> } />
        <Route path="/dashboard" render={() => <Dashboard />} />
        <Route exact path="/dashboard/book/:id" render={(props) => <BookNews id={props.match.params.id}/> } />
        <Route path="/autores" render={() =>  <ListAuthors />} />
        <Route exact path="/autor/:id" render={(props) => <AuthorsPage id={props.match.params.id}/> } />
        <Route path="/editorial" render={() => <Editorial  /> } />
        <FooterPage />
      </StorageProvider>

      
    </div>
  );
}

export default withRouter(App);
