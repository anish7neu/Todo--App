import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import AddTodo from "../pages/addTodo/AddTodo";
import ViewPage from "../pages/ViewPage/ViewPage";

const AllRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={MainPage} />
          <Route path="/add" Component={AddTodo} />

          {/* Dymanic Routing. Rendering Dymanic Pages */}
          {/* <Route path="/view/:id" Component={ViewPage} /> */}

          <Route path="/view" Component={ViewPage} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default AllRoutes;
