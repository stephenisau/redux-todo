import React, { Component } from "react";

class NewTodoForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state)
    this.setState({
      title: "",
      description: ""
    });
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label for="todo">Add todo: </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Add a todo..."
            name="title"
            value={this.state.title}
            onChange={(e) => this.handleChange(e)} />
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Add a todo..."
            name="description"
            value={this.state.description}
            onChange={(e) => this.handleChange(e)} />
        </div>
        <button className="btn btn-primary">Add todo</button>
      </form>
    );
  }
}

export default NewTodoForm;