import { LessonsCardData } from "../data";
const LessonsCards = () => {
  return (
    <div>
      <h3 id="lesson" className="lessons-title section-title custom-color">
        LESSONS
      </h3>
      <section id="lessons1">
        {LessonsCardData.map((lesson) => {
          const { id, subtitle, type, price, text } = lesson;
          return (
            <div className="lessons-card" key={id}>
              <h4 className="lessons-subtitle custom-color">
                {subtitle} <br />
                {type}
              </h4>
              <h5 className="custom-color">
                {price}
                <br />
                Person
              </h5>
              <h6 className="custom-color">Weekend training</h6>
              <p className="custom-color">{text}</p>
              <a href="#contact-us" className="start-now2">
                <p>START NOW</p>
              </a>
            </div>
          );
        })}
      </section>
    </div>
  );
};
export default LessonsCards;
