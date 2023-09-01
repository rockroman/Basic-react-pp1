import "./App.css";
import AboutUs from "./components/AboutUs";
import Camps from "./components/Camps";
import Form from "./components/Form";
import Gallery from "./components/Gallery";
import LessonsCards from "./components/LessonsCards";
import Nav_desktop from "./components/Nav_desktop";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
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
      <Services />
      <LessonsCards />
      <Camps />
      <Gallery />
      <AboutUs />
      <Form />
    </>
  );
}

export default App;
