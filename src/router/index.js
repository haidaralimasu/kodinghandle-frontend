import React from "react";
import { Navbar, Footer } from "../components";
import {
  Blog,
  BlogDetail,
  Error,
  Home,
  Login,
  Register,
  Contact,
} from "../pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/blog" exact component={Blog} />
        <Route path="/blog/:id" exact component={BlogDetail} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/contact" exact component={Contact} />
        <Route component={Error} />
      </Switch>
      {/* <Navbar /> */}
      <Footer />
    </Router>
  );
};

export default Routes;
