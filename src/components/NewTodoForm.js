import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NewTodoForm.css";

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
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor="todo">Add todo: </label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Add a title for your todo..."
              name="title"
              value={this.state.title}
              onChange={(e) => this.handleChange(e)} />
            <input
              type="text"
              className="form-control"
              id="description"
              placeholder="Add a description for your todo..."
              name="description"
              value={this.state.description}
              onChange={(e) => this.handleChange(e)} />
          </div>
          <div className="button-container">
            <Link className="close-search" to="/" />
            <button className="btn btn-primary">Add todo</button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default NewTodoForm;