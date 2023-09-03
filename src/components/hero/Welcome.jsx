import sufrersImg from "../../images/2-surfers-welcome-img-pexels.webp";
const Welcome = () => {
  return (
    <section id="welcome-section">
      <h2>
        HERE.
        <br />
        RISE WITH WAVES.
      </h2>
      <section id="welcome-message">
        <img
          loading="lazy"
          src={sufrersImg}
          alt="Two Men Carrying Surfboards Near Seashore"
          width="639"
          height="511"
        />
        <div id="welcome-text">
          <h3 className="custom-color">
            WELCOME TO THE SURF<em className="custom-color">ON</em>
          </h3>
          <p className="custom-color">
            As a group of international surfing enthusiasts Surfing is our life
            and We want to make sure that you have the best experience possible
            out there in the ocean,catch your first wave, achieve your dream and
            discover your new passion.
          </p>
        </div>
      </section>
    </section>
  );
};
export default Welcome;
