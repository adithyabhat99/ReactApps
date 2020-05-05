import React, { Component } from "react";
import ToDoItem from "./ToDoItem";

export default class ToDoList extends Component {
  render() {
    const { items, clearItems, handleDelete, handleEdit } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">Todo List</h3>
        {items.map((item) => (
          <ToDoItem
            key={item.id}
            title={item.item}
            handleDelete={() => handleDelete(item.id)}
            handleEdit={() => handleEdit(item.id)}
          />
        ))}
        <button
          type="button"
          className="btn btn-danger btn-block text-capitalize mt-5 "
          onClick={clearItems}
        >
          clear list
        </button>
      </ul>
    );
  }
}
