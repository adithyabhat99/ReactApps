import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const people = [
    {
        name: "John",
        job: "Developer",
        url: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
    },
    {
        name: "Peter",
        job: "Designer",
        url: "https://randomuser.me/api/portraits/thumb/men/22.jpg",
    },
    {
        name: "Casey",
        job: "Tester",
        url: "https://randomuser.me/api/portraits/thumb/men/1.jpg",
    },
];

ReactDOM.render(<App people={people} />, document.getElementById("root"));
