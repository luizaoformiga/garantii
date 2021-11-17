import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Home, NewUsers, Users, UsersNames } from "../pages";
import PrivateRoute from "./private";
import PublicRoute from "./public";

export const Routes: React.FC = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Switch>
          <PublicRoute exact path="/" component={Home} />
          <PublicRoute path="/newusers" component={NewUsers} />
          <PublicRoute path="/users" component={Users} />
          <PublicRoute path="/usernames" component={UsersNames} />
        </Switch>
      </BrowserRouter>
    </RecoilRoot>
  );
};
