import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";

import { Home, NewUsers, Users, UsersNames } from "../containers";
import store from "../store";
import PublicRoute from "./public";

export const Routes: React.FC = () => {
  return (
    <Provider store={store}>
      <RecoilRoot>
        <BrowserRouter>
          <Switch>
            <PublicRoute exact path="/" component={Home} />
            <PublicRoute path="/newusers" component={NewUsers} />
            <PublicRoute path="/users/:id" component={Users} />
            <PublicRoute path="/usernames" component={UsersNames} />
          </Switch>
        </BrowserRouter>
      </RecoilRoot>
    </Provider>
  );
};
