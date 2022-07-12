import { useReducer, useEffect } from "react";

import { todoReducer } from "./todoReducer";

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  //el todoReducer aunque sea una funcion no se ejecuta, para que sea el useReducer el que lo ejecute cuando tenga que hacerlo.
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);
  // [lista d tareas, dispatch => mi funcion que despacha acciones hacia ese reducer en particular]

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    console.log({ id });
    dispatch({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };
  const onToggleTodo = (id) => {
    console.log({ id });
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };

  const todosCount = todos.length;

  const pendingTodosCount = todos.filter((todo) => !todo.done).length;

  return {
    todos,
    todosCount,
    pendingTodosCount,
    handleDeleteTodo,
    handleNewTodo,
    onToggleTodo,
  };
};
