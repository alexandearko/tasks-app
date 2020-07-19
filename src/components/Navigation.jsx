import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a href="" className="text-white">
          Tasks
        </a>
        <span className="badge badge-pill badge-light ml-2">4</span>
      </nav>
    );
  }
}

export default Navigation;
