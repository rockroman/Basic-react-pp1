import logo from "../../images/surf-logo1.jpg";
import "../../App.css";
import { navLinks } from "../data";
import { BsSunFill } from "react-icons/bs";
const Nav_desktop = () => {
  return (
    <main id="hero">
      <button className="theme">
        {" "}
        <BsSunFill />
      </button>

      <nav className="desktop-nav">
        <img loading="lazy" src={logo} alt="" className="logo1" />

        <div className="nav-link">
          {navLinks.map((link) => {
            const { id, href, text } = link;
            return (
              <a key={id} className="nav-btn" href={href}>
                {text}
              </a>
            );
          })}
        </div>
      </nav>
      <img loading="lazy" src={logo} alt="" id="logo" />
      <div className="hero-bottom">
        <h1 className="custom-color">YOUR SURFING ADVENTURE START'S </h1>
        <a href="#contact-us" id="start-now">
          <p>START NOW</p>
        </a>
      </div>
    </main>
  );
};
export default Nav_desktop;
