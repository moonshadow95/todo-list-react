import React, { PureComponent } from 'react';

class Todo extends PureComponent {
  handleIncrement = () => {
    this.props.onIncrement(this.props.todo);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.todo);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.todo);
  };

  render() {
    const { name, count } = this.props.todo;
    return (
      <li className="todo">
        <div className="todo-name__wrap">
          <span className="todo-name">{name}</span>
          <span className="todo-count">{count}</span>
        </div>
        <div className="todo-buttons">
          <button
            className="todo-button todo-plus"
            onClick={this.handleIncrement}
          >
            <i className="fas fa-plus"></i>
          </button>
          <button
            className="todo-button todo-minus"
            onClick={this.handleDecrement}
          >
            <i className="fas fa-minus"></i>
          </button>
          <button
            className="todo-button todo-delete"
            onClick={this.handleDelete}
          >
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
      </li>
    );
  }
}

export default Todo;
