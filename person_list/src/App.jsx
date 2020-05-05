import React from "react";
import "./App.css";

const Person = ({ person }) => {
  return <div className="person">
    <img src={person.url} alt="person"></img>
    <h4>{person.name}</h4>
    <h4>{person.job}</h4>
  </div>
};

const PersonList = ({ people }) => people.map((person) => <Person person={person} key={person.url} ></Person >);

const App = ({ people }) => <PersonList people={people}></PersonList>;


export default App;
