import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Coursesales from "./Coursesales";

class App extends Component {
  render() {
    var courses = [
      { name: "Complete HTML course", price: 199 },
      { name: "Complete CSS course", price: 299 },
      { name: "Complete JS course", price: 180 },
      { name: "Complete PHP course", price: 99 }
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Course Purchase Page</h2>
          <Coursesales items={courses} />
        </header>
      </div>
    );
  }
}

export default App;
