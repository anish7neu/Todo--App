import Navbar from "../Navbar";

const MainPage = () => {
  const getTodo = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];

  console.log(getTodo);
  return (
    <>
      <>
        <Navbar />
      </>
      <div>
        <h3>Your ToDo:</h3>
        {getTodo.map((item) => (
          <>
            <div>{item}</div>
          </>
        ))}
      </div>
    </>
  );
};
export default MainPage;
