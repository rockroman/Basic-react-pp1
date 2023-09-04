import rentalDesktop from "../../images/rental-img-desktop-unsplash.webp";
import rentalSmall from "../../images/rental-img-small-unsplash.webp";

const Rentals = () => {
  return (
    <div id="rental">
      <h2 className="custom-color">RENTALS</h2>
      <picture>
        <source media="(min-width:650px )" srcSet={rentalDesktop}></source>
        <img
          id="our-rental"
          src={rentalSmall}
          alt="selection on surfingboards on a sunny day"
        />
      </picture>
      <p className="custom-color">
        At SURF<em className="custom-color">ON</em> we pride ourselves on
        ensuring you have the right equipment and a proper fitting wetsuit.
        rental service is provided 365 days a year ,7 days a week with amazing
        range of boards ,accesories and suits. We always work within weather,
        tide and safety conditions but always do our best to get you the best
        experience in the water we can.
      </p>
      <div id="testemonial-quote">
        <p>SURFING ISN'T JUST A SPORT. IT'S A WAY OF LIFE.</p>
      </div>
    </div>
  );
};
export default Rentals;
