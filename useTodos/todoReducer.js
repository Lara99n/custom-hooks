export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case "[TODO] Add Todo":
      return [...initialState, action.payload];
    //throw new Error("Action.type = ABC no esta implementada"); // Si mi acction aun no esta funcionando lo ideal seria que enviemos un throw new Error

    case "[TODO] Remove Todo":
      return initialState.filter((e) => e.id !== action.payload);

    case "[TODO] Toggle Todo":
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          console.log(action.payload);
          return {
            ...todo,
            done: !todo.done,
          };
        }

        return todo;
      });

    default:
      return initialState;
  }
};
