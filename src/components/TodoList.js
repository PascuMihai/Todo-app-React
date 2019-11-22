import React, { Component } from "react";
import Todo from "./Todo";

export class TodoList extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map(todo => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              markCompleted={this.props.markCompleted}
              deleteTodo={this.props.deleteTodo}
            />
          );
        })}
      </div>
    );
  }
}

export default TodoList;
