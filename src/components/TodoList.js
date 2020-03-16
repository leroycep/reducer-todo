import React, { useReducer } from "react";
import { reducer, INITIAL_STATE } from "../reducers/index";
import Todo from "./Todo";

function TodoList() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const newTodo = () => {
    dispatch({ type: "NEW_TODO" });
  };

  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
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
      <div>
        <button onClick={newTodo}>New Todo</button>
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>
    </div>
  );
}

export default TodoList;
