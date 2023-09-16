import { Link, useNavigate } from "react-router-dom";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <h1 className="header">To-do V1</h1>
        <div className="nav-right">
          <div>
            <Link
              to="/"
              style={{ textDecoration: "none", color: "rgb(62, 243, 62)" }}
            >
              <div>
                <span className="nav-item">Home</span>
              </div>
            </Link>
          </div>
          <div>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "rgb(62, 243, 62)" }}
            >
              <div>
                <span className="nav-item">LogIn</span>
              </div>
            </Link>
          </div>

          <div>
            <Link
              to="/add"
              style={{ textDecoration: "none", color: "rgb(62, 243, 62)" }}
            >
              <div>
                <span className="nav-item">Todo App</span>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
