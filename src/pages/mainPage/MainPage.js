import { Link } from "react-router-dom";
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
        {getTodo.map((item, index) => (
          <>
            <div className="todo-item">
              <div>
                {index + 1} - {item}
              </div>
              <Link to={`/view?id=${index}`}>
                <AiOutlineEye size={"25px"} />
              </Link>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
export default MainPage;
