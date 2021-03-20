import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { Artists , ArtistsDetail} from "../Artist";

export const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/artist" component={Artists} />
      <Route path="/artist:id" component={ArtistsDetail} />
    </Switch>
  </main>
);
