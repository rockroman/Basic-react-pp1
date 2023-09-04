import Rentals from "./Rentals";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section id="services">
      <h3 className="section title custom-color">OUR SERVICES</h3>
      <hr />
      <ServiceCard />
      <Rentals />
    </section>
  );
};
export default Services;
