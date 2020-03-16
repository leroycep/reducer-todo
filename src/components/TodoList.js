import React, { useReducer } from "react";
import { reducer, INITIAL_STATE } from "../reducers/index";

function TodoList() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <div>
      {state.todos.map(todo => (
        <div>{todo.item}</div>
      ))}
    </div>
  );
}

export default TodoList;
