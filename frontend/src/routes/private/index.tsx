import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../../services/auth";

type Props = {
  component: React.ComponentType<any>;
  path: string;
  exact?: boolean | undefined;
};

const PrivateRoute: React.FC<Props> = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

export default PrivateRoute;
