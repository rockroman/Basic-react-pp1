import logoImg from "../../images/surf-logo1.jpg";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <footer>
      <div id="right-side">
        <a href="#">
          <img
            loading="lazy"
            src={logoImg}
            alt="light blue surf logo with red surfer and black and red text"
            id="logo2"
          />
        </a>
        <FooterLinks />

        <p>
          This website is build for educational purposes and it's product of
          imagination and hard work!Company and content are pure fiction
        </p>
        <div className="trade-mark">
          By{" "}
          <a href="https://github.com/rockroman">
            Roman Rakic <i className="fa-brands fa-github"></i>
          </a>
          <br />
          2022
        </div>
      </div>
    </footer>
  );
};
export default Footer;
