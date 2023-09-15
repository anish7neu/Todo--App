import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <h1>To-do V1</h1>
        <div>
          <Link to="/">
            <div>Home</div>
          </Link>

          <Link to="/add">
            <div>Todo App</div>
          </Link>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
