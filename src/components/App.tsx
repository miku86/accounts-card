import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CardDetails from "./CardDetails";
import Home from "./Home";

interface Props {}

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:id">
          <CardDetails />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
