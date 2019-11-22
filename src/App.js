import React, { Component } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import uuid from "uuid";
import About from "./components/About";

import { BrowserRouter as Router, Route } from "react-router-dom";

export class App extends Component {
  state = {
    todos: []
  };

  markCompleted = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  deleteTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  render() {
    return (
      <Router>
        <div>
        <Header />
        <Route path='/about' component={About} />
          <Route exact path='/' render={props => (
            <React.Fragment>
            <AddTodo 
              addTodo={this.addTodo} 
            />
            <TodoList
              todos={this.state.todos}
              markCompleted={this.markCompleted}
              deleteTodo={this.deleteTodo}
            />
            </React.Fragment>
          )} />
        </div>
      </Router>
    );
  }
}

export default App;
