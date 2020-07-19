import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { todos } from "./todos.json";

import Navigation from "./components/Navigation";

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos,
    };
  }
  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="bagde badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p>{todo.responsable}</p>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="App">
        <Navigation />
        <img src={logo} className="App-logo" alt="logo" />

        <div className="container">
          <div className="row mt4">{todos}</div>
        </div>
      </div>
    );
  }
}

export default App;
