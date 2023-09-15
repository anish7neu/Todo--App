import Navbar from "../Navbar";

import "../styles/MainPage.css";

const MainPage = () => {
  const getTodo = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];
  return (
    <>
      <>
        <Navbar />
      </>
      <div>
        <h3>Your ToDo:</h3>
        {getTodo.map((item) => (
          <>
            <div className="todo-item">{item}</div>
          </>
        ))}
      </div>
    </>
  );
};
export default MainPage;
