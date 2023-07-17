import "./App.css";
import Camps from "./components/Camps";
import Form from "./components/Form";
import LessonsCards from "./components/LessonsCards";
import Nav_desktop from "./components/Nav_desktop";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer
        position="top-right"
        theme="dark"
        style={{ padding: "30px 10px", width: "40%" }}
      />
      <Nav_desktop />
      <Welcome />
      <LessonsCards />
      <Camps />
      <Form />
    </>
  );
}

export default App;
