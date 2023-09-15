import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      This is main page.
      <Link to="/add">Add Todo</Link>
    </>
  );
};
export default MainPage;
/* 
<a href="/add">Add Todo</a>
This causes page to load which is not optimality usecase of React. So we use: 
<Link to = "/add">Add Todo<Link />
*/
