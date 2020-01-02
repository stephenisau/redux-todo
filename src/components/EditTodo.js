import React, { Component } from "react";

class EditTodo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "" 
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let updatedTodo = { id: this.props.todoId, title: this.state.title, description: this.state.description };
    this.props.updateTodo(updatedTodo);
    this.setState({
      title: "",
      description: ""
    });
  }

  render() {

    const { title, description } = this.props;

    console.log(this.state);
    return (
      <React.Fragment>
        <li className="card mx-auto">
          <form>
            <div className="form-group">
              <label htmlFor="edit-title">
                Title:
            <input
                  id="edit-title"
                  name="title"
                  value={title}
                  placeholder="Add a title..."
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="edit-description">
                Description:
            <input
                  id="edit-description"
                  name="description"
                  value={description}
                  placeholder="Add a description..."
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <button className="btn btn-primary" onClick={this.handleSubmit}>Update</button>
          </form>
          <button onClick={() => console.log('clicked')} className="btn btn-secondary">Cancel</button>
        </li>
      </React.Fragment>
    );
  }
}

export default EditTodo;