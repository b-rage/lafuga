import React, { useState }  from 'react';
import {Route,Link} from 'react-router-dom';
import AddBook from './AddBook';
import AddAuthor from './AddAuthor';
import ListBooks from './ListBooks';


const Dashboard = () => {

  const routes = [
    { path: `/dashboard/add-book`,
      exact: true,
      sidebar: () => <div>add book</div>,
      main: () => <AddBook  />
    },
    { path: `/dashboard/add-author`,
      exact: true,
      sidebar: () => <div>add author</div>,
      main: () => <AddAuthor/>
    },
    { path: `/dashboard/list-books`,
      sidebar: () => <div>list books</div>,
      main: () => <ListBooks/>
    }
  ]

  return (
    <>
    <div className="ml-35">
      <nav>
        <Link to={`/dashboard/add-book`}><p>add book</p></Link>
        <Link to={`/dashboard/add-author`}><p>add author</p></Link>
        <Link to={`/dashboard/list-books`}><p>list book</p></Link>
      </nav>
              {routes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                />
                ))}
            </div>
    </>
  );
}

export default Dashboard;