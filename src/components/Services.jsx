import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section id="services">
      <h3 className="section title">OUR SERVICES</h3>

      <div id="rental">
        <h2>RENTALS</h2>
        <ServiceCard />
        {/* <picture>
                <source media="(min-width:650px )" srcset="assets/images/rental-img-desktop-unsplash.webp">
                <img id="our-rental" src="assets/images/rental-img-small-unsplash.webp" alt="selection on surfingboards on a sunny day">
            </picture> */}
        <p>
          At SURF<em>ON</em> we pride ourselves on ensuring you have the right
          equipment and a proper fitting wetsuit. rental service is provided 365
          days a year ,7 days a week with amazing range of boards ,accesories
          and suits. We always work within weather, tide and safety conditions
          but always do our best to get you the best experience in the water we
          can.
        </p>
      </div>
      <div id="testemonial-quote">
        <p>SURFING ISN'T JUST A SPORT. IT'S A WAY OF LIFE.</p>
      </div>
    </section>
  );
};
export default Services;
