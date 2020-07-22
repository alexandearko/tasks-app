import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//  data
import { todos } from "./todos.json";

//  subComponents
import Navigation from "./components/Navigation";
import TodoForm from "./components/TodoForm";
import TodoCard from "./components/TodoCard"

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos,
    };
    this.handleAddTodo = this.handleAddTodo.bind(this)
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  RemoveTodo = (index) => {
    console.log(index)
    if(window.confirm('Are you sure you want to delete it?')) {
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !== index
        })
      })
    }
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <TodoCard todo={todo} index={i} key={i} RemoveTodo={this.RemoveTodo.bind(this,i)} />
      );
    });
    return (
      <div className="App">
        <Navigation nroTasks={this.state.todos.length} />

        <div className="container">
          <div className="row mt4">
            <div className="col-md-4 text-center">
              <img src={logo} className="App-logo" alt="logo" />
              <TodoForm onAddTodo={this.handleAddTodo} />
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
