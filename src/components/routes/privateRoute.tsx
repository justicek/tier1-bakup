import React, { useEffect, Component } from 'react';
import { Route } from 'react-router-dom';
import { useAuth0 } from '../../config/auth0-wrapper';
import { async } from 'q';

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    const fn = async () => {
      if (!isAuthenticated) {
        await loginWithRedirect({
          appState: { targetUrl: path },
        });
      }
    };
    fn();
  }, [isAuthenticated, loginWithRedirect, path]);

  const render = props => <Component {...props} />;

  return <Route path={path} render={render} {...rest} />;
};

export default PrivateRoute;