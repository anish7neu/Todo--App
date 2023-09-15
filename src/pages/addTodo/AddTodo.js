import { useRef } from "react";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";

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
        <h1>Add ToDo:</h1>
        <br />
        <form onSubmit={addTodo}>
          <input placeholder="Write Something!" ref={todoText} />
          <button>Add</button>
        </form>
      </div>
    </>
  );
};
export default AddTodo;

//useRef is used to refer to the inputted text
