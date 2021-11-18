import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { StoreContext } from "../../store/context";

type Props = {
  component: React.ComponentType<any>;
  path: string;
  exact?: boolean | undefined;
};

const PrivateRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  const { token } = useContext(StoreContext);
  
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
