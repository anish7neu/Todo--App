import { useRef } from "react";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";

import "../styles/Add-todo.css";

const AddTodo = () => {
  const todoText = useRef();

  const navigate = useNavigate();

  const addTodo = (e) => {
    e.preventDefault();

    const todoString = todoText.current.value;

    const initialTodo = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [];

    initialTodo.push(todoString);

    localStorage.setItem("todo", JSON.stringify(initialTodo));

    navigate("/");
  };

  return (
    <>
      <>
        <Navbar />
      </>
      <div>
        <h3>Add ToDo:</h3>
        <br />
        <form className="form-div" onSubmit={addTodo}>
          <div>
            <input
              className="input-todo"
              placeholder="Write Something To-Do!"
              ref={todoText}
              required
            />
          </div>
          <div>
            <button className="add-button">Add</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default AddTodo;

//useRef is used to refer to the inputted text
