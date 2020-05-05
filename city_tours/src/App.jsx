import React, { Component } from "react";

import NavBar from "./components/NavBar/NavBar";
import TourList from "./components/TourList/TourList";

import "./App.scss";


class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <TourList />
            </div>
        )
    }
}

export default App;