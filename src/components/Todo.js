import React from "react";
import "./Style.css";
import { FaTrash } from "react-icons/fa";

const Todo = ({ setTodos, todos }) => {
  const handleDel = (id) => {
    const newState = [...todos];
    const index = todos.findIndex((todo) => todo.id === id);
    if (window.confirm("Are you sure you want to delete this Todo?")) {
      newState.splice(index, 1);
      setTodos(newState);
    } else {
      return todos;
    }
  };
  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.todoName}
              <div className="li__btn">
                <FaTrash onClick={() => handleDel(todo.id)} className="trash" />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
