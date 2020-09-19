import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./libs/auth";

import { isLogin } from './libs/utils';
/*
function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = useAuth();

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}

export default PrivateRoute;
*/
const PrivateRoute = ({ component: Component = null, render: Render = null, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props =>
        true ? (
          Render ? (
            Render(props)
          ) : Component ? (
            <Component {...props} />
          ) : null
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;