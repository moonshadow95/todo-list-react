import React, { memo } from 'react';

const TodoAddform = memo((props) => {
  const inputRef = React.createRef();
  const formRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    //inputRef.current.value = '';
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Type your goal"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default TodoAddform;
