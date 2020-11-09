import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

import Layout from '../components/Layout';
import { IS_LOGGED_IN } from '../gql/query';

import EditNote from './edit';
import Favorites from './favorites';
import Home from './home';
import MyNotes from './mynotes';
import NewNote from './new';
import NotePage from './note';
import SignIn from './signin';
import SignUp from './signup';

const Pages = () => {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <PrivateRoute path="/mynotes" component={MyNotes} />
        <PrivateRoute path="/new" component={NewNote} />
        <PrivateRoute path="/favorites" component={Favorites} />
        <PrivateRoute path="/edit/:id" component={EditNote} />
        <Route path="/note/:id" component={NotePage} />
      </Layout>
    </Router>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return (
    <Route
      {...rest}
      render={props =>
        data.isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default Pages;
