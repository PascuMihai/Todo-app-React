import React, { Component } from "react";

export class Todo extends Component {
  getStyles = () => {
    return {
      background: "grey",
      borderBottom: "1px solid black",
      padding: "10px",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };
  render() {
    return (
      <div style={this.getStyles()}>
        <p>
          <input
            type="checkbox"
            onClick={() => this.props.markCompleted(this.props.todo.id)}
          />{" "}
          {this.props.todo.title}
          <button onClick={() => this.props.deleteTodo(this.props.todo.id)} >X</button>
        </p>
      </div>
    );
  }
}

export default Todo;
