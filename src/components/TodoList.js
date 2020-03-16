import React, { useReducer } from "react";
import { reducer, INITIAL_STATE } from "../reducers/index";
import Todo from "./Todo";

function TodoList() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const newTodo = () => {
    dispatch({ type: "NEW_TODO" });
  };

  return (
    <div>
      {state.todos.map(todo => (
        <Todo
          key={todo.id}
          editing={todo.id === state.editing}
          todo={todo}
          dispatch={dispatch}
        />
      ))}
      <button onClick={newTodo}>New Todo</button>
    </div>
  );
}

export default TodoList;
