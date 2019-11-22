import React, { Component } from "react";

export class AddTodo extends Component {
    state = {
        title: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({
            title: ''
        })
    }

  render() {
    return (
      <div>
        <form style={{display: 'flex'}} onSubmit={this.handleSubmit}>
          <input style={{flex: '10'}} type="text" name='title' value={this.state.title} onChange={this.handleChange}/>
          <input style={{flex: '1'}} type="submit" />
        </form>
      </div>
    );
  }
}

export default AddTodo;
