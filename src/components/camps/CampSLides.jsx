import { carouselSlides } from "../data";

const CampSLides = () => {
  // console.log(carouselSlides);
  return (
    <div className="slides">
      {carouselSlides.map((slide) => {
        const { id, slideClass, text } = slide;
        return (
          <div key={id} className={slideClass} id={id} tabIndex="0">
            <h3 className="slide-title custom-color">{text}</h3>
          </div>
        );
      })}
    </div>
  );
};
export default CampSLides;
