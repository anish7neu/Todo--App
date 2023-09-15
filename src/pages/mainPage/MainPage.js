import Navbar from "../Navbar";

import "../styles/MainPage.css";
import { AiOutlineEye } from "react-icons/ai";

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
            <div className="todo-item">
              <div>{item}</div>
              <AiOutlineEye size={"25px"} />
            </div>
          </>
        ))}
      </div>
    </>
  );
};
export default MainPage;
