import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../../services/auth";

type Props = {
  component: React.ComponentType<any>;
  path: string;
  exact?: boolean | undefined;
};

const PublicRoute: React.FC<Props> = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Redirect to={{ pathname: "/home", state: { from: props.location } }} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default PublicRoute;
