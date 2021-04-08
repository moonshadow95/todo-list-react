import Todo from './todo';
import TodoAddform from './todoAddform';
import React, { memo } from 'react';

const Todos = memo((props) => {
  const handleAdd = (name) => {
    props.onAdd(name);
  };

  const handleIncrement = (todo) => {
    props.onIncrement(todo);
  };

  const handleDecrement = (todo) => {
    props.onDecrement(todo);
  };

  const handleDelete = (todo) => {
    props.onDelete(todo);
  };

  return (
    <>
      <TodoAddform onAdd={handleAdd} />
      <ul>
        {props.todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </>
  );
});

export default Todos;
