import React, { useState } from "react";
import "./Style.css";
import { AiFillFileAdd } from "react-icons/ai";
import Todo from "./Todo";

const TodoForm = () => {
  //STATE
  const [state, setState] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");
  //EVENTS
  const handleAddTodos = (e) => {
    e.preventDefault();
    if (!state) {
      setError("Please Input a Todo");
    } else {
      setTodos([
        ...todos,
        { id: Math.random() * 10000, todoName: state, completed: false },
      ]);
      setState("");
      setError("");
    }
  };

  return (
    <div className="body">
      <div className="container">
        <h1>Sam Todo's</h1>
        {error && <span style={{ color: "red" }}>{error}</span>}
        <br />
        <div className="header__form">
          <input
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="Add Todo"
          />
          <AiFillFileAdd onClick={handleAddTodos} className="btn" />
        </div>
        <div className="todos__form">
          <Todo todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
