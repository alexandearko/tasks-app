import React, { Component } from 'react';

class TodoCard extends Component {

  handleClick() {

  }

  render() {
    return (
      <div className="col-md-4" key={this.props.index}>
          <div className="card mt-4">
            <div className="card-header">
            <h3>{this.props.todo.title}</h3>
              <span className="bagde badge-pill badge-danger ml-2">
              {this.props.todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{this.props.todo.description}</p>
              <p>{this.props.todo.responsable}</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.props.RemoveTodo} >
                Delete
              </button>
            </div>
          </div>
        </div>
    )
  }
}

export default TodoCard;