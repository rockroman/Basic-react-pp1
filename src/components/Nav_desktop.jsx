import logo from "../images/surf-logo1.jpg";
import ".././App.css";
// import backgroundImg from "../images/hero-img-desktop-pexels-saeid-anvar-.webp";
import { navLinks } from "./data";
const Nav_desktop = () => {
  return (
    // <main id="hero" style={{ backgroundImage: `url(${backgroundImg})` }}>
    <main id="hero">
      <nav className="desktop-nav">
        <img loading="lazy" src={logo} alt="" id="logo1" />
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
        <h1>YOUR SURFING ADVENTURE START'S </h1>
        <a href="#contact-us" id="start-now">
          <p>START NOW</p>
        </a>
      </div>
    </main>
  );
};
export default Nav_desktop;
