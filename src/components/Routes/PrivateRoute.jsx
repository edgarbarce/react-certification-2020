import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useLogin from '../../Hooks/useLogin';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useLogin();
  return (
    <Route
      {...rest}
      render={(props) =>
        user !== undefined ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
