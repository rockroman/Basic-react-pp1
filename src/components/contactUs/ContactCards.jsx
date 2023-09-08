import { contactCards } from "../data";
const ContactCards = () => {
  return (
    <div id="bottom-form" className="column-span-2">
      {contactCards.map((card) => {
        const { id, cardClass, icon, title, text } = card;
        return (
          <div key={id} className={cardClass}>
            <div className="custom-color" style={{ fontSize: "2rem" }}>
              {icon}
            </div>
            <p className="custom-color">
              {title}
              <br />
              {text}
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default ContactCards;
