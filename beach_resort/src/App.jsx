import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Home, SingleRoom, Rooms, Error } from "./pages/";
import { NavBar } from "./components/"

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/" exact component={Rooms} />
        <Route path="/rooms/:slug" exact component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
