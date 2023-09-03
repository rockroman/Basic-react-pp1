import { instructors } from "../data";
const Instructor = () => {
  return (
    <div className="instructor">
      {instructors.map((Instructor) => {
        const { id, src, instructorName, alt, text } = Instructor;
        return (
          <div key={id} className="instructor-card">
            <img
              loading="lazy"
              className="instructor-img"
              src={src}
              alt={alt}
            />
            <h4>
              {" "}
              <span className="custom-color"> {instructorName}</span>
            </h4>
            <p className="custom-color">{text}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Instructor;
