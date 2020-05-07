import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  NavBar,
  ProductList,
  Details,
  Default,
  Cart,
  Modal,
} from "./components/";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* NavBar will be shown everywhere, so it is outside switic */}
        <NavBar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}
