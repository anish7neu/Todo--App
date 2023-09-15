import { useRef } from "react";
import Navbar from "../Navbar";

const AddTodo = () => {
  const todoText = useRef();

  const addTodo = (e) => {
    e.preventDefault();
    console.log(todoText.current.value);
  };

  return (
    <>
      <>
        <Navbar />
      </>
      <div>
        <h1>Add ToDo:</h1>
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
