import React, { useRef } from "react";

function Todo({ todo, editing, dispatch }) {
  const itemInputEl = useRef(null);

  if (!editing) {
    return (
      <div>
        <input type="checkbox" checked={todo.completed} />
        {todo.item}
      </div>
    );
  } else {
    const handleSubmit = ev => {
      ev.preventDefault();
      dispatch({
        type: "SUBMIT_TODO_TEXT",
        payload: { id: todo.id, value: itemInputEl.current.value }
      });
    };
    return (
      <form onSubmit={handleSubmit}>
        <input type="checkbox" checked={todo.completed} />
        <input ref={itemInputEl} type="text" defaultValue={todo.item} focus />
      </form>
    );
  }
}

export default Todo;
