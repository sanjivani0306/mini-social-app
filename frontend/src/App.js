import Register from "./components/Register";
import Login from "./components/Login";
import CreatePost from "./components/CreatePost";
import Feed from "./components/Feed";

function App() {
  return (
    <div style={{ background: "#f4f6f8", minHeight: "100vh", paddingTop: "20px" }}>
      <div className="container" style={{ maxWidth: "600px" }}>
        <h3 className="text-center mb-4 fw-bold">
          Mini Social Feed
        </h3>

        <Register />
        <Login />
        <CreatePost />
        <Feed />
      </div>
    </div>
  );
}

export default App;
