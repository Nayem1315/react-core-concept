import React from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const person = {
    name: "nayem",
    or: "and",
    work: "learn with jhankar mahbub"
  };
  const person2 = {
    name: "mahfuz",
    job: "singer"
  };
  const style = {
    color: "black",
    backgroundColor: "white"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React App Open Successfully
        </p>
        <h1 className="" style={style}>My Name Is {person.name + " " + person.or + " " + person.work}</h1>
        <h3>My second jocker {person2.name + " " + person2.job}</h3>
        <p>My first react paragraph</p>
      </header>
    </div>
  );
}

export default App;
