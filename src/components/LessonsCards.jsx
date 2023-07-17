import { LessonsCardData } from "./data";
const LessonsCards = () => {
  return (
    <div>
      <h3 id="lesson" className="lessons-title section-title">
        LESSONS
      </h3>
      <section id="lessons1">
        {LessonsCardData.map((lesson) => {
          const { id, subtitle, type, price, text } = lesson;
          return (
            <div className="lessons-card" key={id}>
              <h4 className="lessons-subtitle">
                {subtitle} <br />
                {type}
              </h4>
              <h5>
                {price}
                <br />
                <em>person</em>
              </h5>
              <h6>Weekend training</h6>
              <p>{text}</p>
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
