import Navbar from "../Navbar";

import "../styles/MainPage.css";

const LogIn = () => {
  const login = () => {};

  return (
    <>
      <>
        <Navbar />
      </>
      <div>
        <button
          onClick={() => {
            localStorage.setItem("loggedIn", true);
          }}
          className="add-button"
        >
          Log In
        </button>
      </div>
    </>
  );
};
export default LogIn;
