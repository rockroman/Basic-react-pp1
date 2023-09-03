import "./App.css";
import AboutUs from "./components/aboutUs/AboutUs";
import Camps from "./components/camps/Camps";
import Form from "./components/contactUs/Form";
import LessonsCards from "./components/lessons/LessonsCards";
import Nav_desktop from "./components/navbar/Nav_desktop";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";
import Welcome from "./components/hero/Welcome";
import { ToastContainer, toast } from "react-toastify";
import Gallery from "./components/gallery/Gallery";

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
