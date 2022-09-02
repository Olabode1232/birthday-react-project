import React, { Component } from "react";
import Data from "./data";
import List from "./list";
import "./App.css";


function App() {
  const [people, setPeople] = React.useState(Data)

  function btnHandler() {
    setPeople([])
  }
  return (
    <div className="container  container">
      <div className="overall">
      <h1>{people.length} Birthdays today</h1>
      <List people={people}/>
      <button className="btn btn-lg button" onClick={btnHandler}>Clear All</button>
      
      </div>
    </div>
  );
}

export default App;
