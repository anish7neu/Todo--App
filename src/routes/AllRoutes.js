import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import AddTodo from "../pages/addTodo/AddTodo";

const AllRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={MainPage} />
          <Route path="/add" Component={AddTodo} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default AllRoutes;
