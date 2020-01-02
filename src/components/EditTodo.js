import React, { useState, useEffect } from "react";


export default function EditTodo({ todo }) {

  const [title, setTitle] = useState(todo.title || "");
  const [description, setDescription] = useState(todo.desciprion || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    // implement handle submit
  }

  console.log('title: ', title);
  console.log('description :', description)
  return (
    <React.Fragment>
      <li className="card mx-auto">
        <form onClick={handleSubmit}>
          <div className="form-group">
            <label htmlFor="edit-title">
              Title:
            <input
                id="edit-title"
                name="title"
                value={title}
                placeholder="Add a title..."
                onChange={(e) => setTitle(e.target.value)}
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
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
          </div>
          <button className="btn btn-primary">Update</button>
          <button className="btn btn-secondary">Cancel</button>
        </form>
      </li>
    </React.Fragment>
  )
}