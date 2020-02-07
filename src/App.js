import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom'
import Dashboard from './components/cms/Dashboard';


function App() {
  return (
    <div className="App">
      <Route path="/login" render={() => <Dashboard /> } />
      
    </div>
  );
}

export default withRouter(App);
