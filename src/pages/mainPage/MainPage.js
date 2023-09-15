import { Link, useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  const login = () => {
    //success
    navigate("/add", { replace: false });
  };

  return (
    <>
      This is main page.
      {/* <Link to="/add">Add Todo</Link> */}
      <button onClick={login}>Log in</button>
    </>
  );
};
export default MainPage;
/* 
<a href="/add">Add Todo</a>
This causes page to load which is not optimality usecase of React. So we use: 
<Link to = "/add">Add Todo<Link />
*/
//navigate is used instead of history
