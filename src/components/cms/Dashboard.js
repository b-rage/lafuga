import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import AddBook from './AddBook';
import AddAuthor from './AddAuthor';
import ListBooks from './ListBooks';


const Dashboard = () => {

  const routes = [
    {
      path: `/dashboard/add-book`,
      exact: true,
      sidebar: () => <div>añadir libro</div>,
      main: () => <AddBook />
    },
    {
      path: `/dashboard/add-author`,
      exact: true,
      sidebar: () => <div>añadir autor</div>,
      main: () => <AddAuthor />
    },
    {
      path: `/dashboard/list-books`,
      sidebar: () => <div>lista libros</div>,
      main: () => <ListBooks />
    }
  ]

  return (
    <>
      <div className="div-dashboard">
        
          <Link to={`/dashboard/add-book`}><p className="button-class-list-nav">añadir libro</p></Link>
          <Link to={`/dashboard/add-author`}><p className="button-class-list-nav">añadir autor</p></Link>
          <Link to={`/dashboard/list-books`}><p className="button-class-list-nav">lista libros</p></Link>
          </div>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      
    </>
  );
}

export default Dashboard;