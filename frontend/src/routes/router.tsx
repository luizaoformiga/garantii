import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";

import PublicRoute from "./public";

import { Users, NewUsers, UsersNames } from "../pages";

export const Routes: React.FC = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Switch>
          <PublicRoute exact path="/" component={NewUsers} />
         {/** <PublicRoute path="/newusers" component={NewUsers} /> */}
          <PublicRoute path="/users/:id" component={Users} />
          <PublicRoute path="/usernames" component={UsersNames} />
        </Switch>
      </BrowserRouter>
    </RecoilRoot>
  );
};
