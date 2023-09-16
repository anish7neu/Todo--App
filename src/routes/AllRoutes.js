import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import AddTodo from "../pages/addTodo/AddTodo";
import ViewPage from "../pages/ViewPage/ViewPage";
import LogIn from "../pages/LogIn/LogIn";

const AllRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="/home" Component={MainPage} />

          <Route
            path="/add"
            element={
              localStorage.getItem("loggedIn") ? (
                <>
                  <>
                    <AddTodo />
                  </>
                </>
              ) : (
                <>
                  <Navigate to="/login" />
                </>
              )
            }
          />

          <Route path="/view/:id" Component={ViewPage} />
          <Route path="/login" Component={LogIn} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default AllRoutes;
