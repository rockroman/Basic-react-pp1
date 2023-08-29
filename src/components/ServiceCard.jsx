import { service } from "./data";
const ServiceCard = () => {
  return (
    <div id="service-cards">
      {service.map((singleService) => {
        const { id, title, src, altText, text } = singleService;
        return (
          <div key={id} className="our-service">
            <h2>{title}</h2>
            <img
              loading="lazy"
              className="service-images"
              src={src}
              alt={altText}
            />
            <p>{text}</p>
          </div>
        );
      })}
    </div>
  );
};
export default ServiceCard;
