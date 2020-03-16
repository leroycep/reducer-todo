import React from "react";

function Todo({ todo }) {
  return (
    <div>
      <input type="checkbox" checked={todo.completed} />
      {todo.item}
    </div>
  );
}

export default Todo;
