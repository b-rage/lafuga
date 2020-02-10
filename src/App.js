import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { StorageProvider } from "./context/Storage";
import Dashboard from './components/cms/Dashboard';
import Login from './components/cms/Login';
import BookNews from './components/cms/BookNews'
import Navbar from './components/website/Navbar';
import ListAuthors from './components/website/ListAuthors';
import AuthorsPage from './components/website/AuthorPage'


const App = () => {

  return (
    <div className="App">
      <StorageProvider>
       
        <Route path="/login" render={() => <Login  /> } />
        <Route path="/dashboard" render={() => <Dashboard />} />
        <Route exact path="/dashboard/book/:id" render={(props) => <BookNews id={props.match.params.id}/> } />
        <Route path="/autores" render={() =>  <ListAuthors />} />
        <Route exact path="/autor/:id" render={(props) => <AuthorsPage id={props.match.params.id}/> } />
      </StorageProvider>

      
    </div>
  );
}

export default withRouter(App);
