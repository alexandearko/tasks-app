import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//  data
import { todos } from "./todos.json";

//  subComponents
import Navigation from "./components/Navigation";
import TodoForm from "./components/TodoForm";

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

        <div className="container">
          <div className="row mt4">
            <div className="col-md-4 text-center">
              <img src={logo} className="App-logo" alt="logo" />
              <TodoForm />
            </div>

            <div className="col-md-8">
              <div className="row">{todos}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
