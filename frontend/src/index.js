import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Root from "./routes/Root";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Root} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
