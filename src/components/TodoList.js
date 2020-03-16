import React, { useReducer } from "react";
import { reducer, INITIAL_STATE } from "../reducers/index";
import Todo from "./Todo";

function TodoList() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <div>
      {state.todos.map(todo => (
        <Todo todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
