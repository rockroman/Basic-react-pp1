import Team from "./Team";
import aboutImg from "../../images/about-us-img-small-dimitrisvetsikas-pixaby.webp";
import Story from "./Story";
import { useContext } from "react";
import { useGlobalContext } from "../../context";

const AboutUs = () => {
  return (
    <>
      <section id="about-us">
        <h2 className="section-title">
          {" "}
          <span className="custom-color">ABOUT US</span>
        </h2>
        <div className="about-hero">
          <img
            loading="lazy"
            src={aboutImg}
            id="about-hero"
            alt="various surfboards leaning on a blue fence on a sunny day"
          />
        </div>
        <Story />
        <Team />
      </section>
    </>
  );
};
export default AboutUs;
