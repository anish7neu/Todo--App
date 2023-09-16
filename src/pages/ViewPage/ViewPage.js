import { useLocation, useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar";

const ViewPage = () => {
  const navigate = useNavigate();

  const getParams = useParams();
  const getID = getParams.id;
  const getStorage = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];

  const getData = getStorage[getID];

  const deleteTodo = () => {
    getStorage.splice(getID, 1);

    localStorage.setItem("todo", JSON.stringify(getStorage));
    navigate("/", { replace: true });
  };
  <>
    <>
      <Navbar />
    </>
    <>
      <button
        onClick={() => navigate("/")}
        style={{
          backgroundColor: "#32CD32",
          color: "white",
          padding: "10px",
          border: "none",
          marginTop: "10px",
          borderRadius: "5px",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        Go Back
      </button>
      <div
        style={{
          backgroundColor: "lightgrey",
          padding: "10px",
          marginTop: "10px",
          borderRadius: "5px",
        }}
      >
        {getData}
      </div>
      <div>
        <button
          style={{
            backgroundColor: "#EE4B2B",
            color: "white",
            padding: "10px",
            border: "none",
            marginTop: "10px",
            borderRadius: "5px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
          onClick={() => deleteTodo()}
        >
          Delete ToDo
        </button>
      </div>
    </>
  </>;
};
export default ViewPage;
