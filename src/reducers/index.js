export const INITIAL_STATE = {
  editing: null,
  todos: [
    { item: "Learn about reducers", completed: false, id: 1337 },
    { item: "Implement about reducers", completed: true, id: 9001 }
  ]
};

export function reducer(state, action) {
  switch (action.type) {
    case "NEW_TODO":
      const newId = Date.now();
      return {
        ...state,
        editing: newId,
        todos: [...state.todos, { item: "", completed: false, id: newId }]
      };
    case "SUBMIT_TODO_TEXT":
      return {
        ...state,
        editing: null,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, item: action.payload.value }
            : todo
        )
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case "CLEAR_COMPLETED":
      console.log("hello");
      console.log(state);
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };
    default:
      return state;
  }
}
