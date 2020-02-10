import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { StorageProvider } from "./context/Storage";
import Dashboard from './components/cms/Dashboard';
import Login from './components/cms/Login';
import BookNews from './components/cms/BookNews'


const App = () => {

  return (
    <div className="App">
      <StorageProvider>
        <Route path="/login" render={() => <Login  /> } />
        <Route path="/dashboard" render={() => <Dashboard />} />
        <Route exact path="/dashboard/book/:id" render={(props) => <BookNews id={props.match.params.id}/> } />
      </StorageProvider>

      
    </div>
  );
}

export default withRouter(App);
