import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import validator from "validator";
import GoogleMap from "./GoogleMap";
import ContactCards from "./ContactCards";

const SERVICE_ID = import.meta.env.VITE_REACT_APP_YOUR_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_REACT_APP_YOUR_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_REACT_APP_YOUR_PUBLIC_KEY;
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [emailError, setEmailError] = useState(false);
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const myForm = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, myForm.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    toast.success(`THANK YOU, ${name} FOR YOUR MESSAGE`);
    setFormSubmitted(true);
  };

  useEffect(() => {
    if (formSubmitted) {
      setName("");
      setEmail("");
      setPhone("");
      setText("");
      setFormSubmitted(false);
    }
  }, [formSubmitted]);

  return (
    <section id="contact-us">
      <form className="my-form" onSubmit={handleSubmit} ref={myForm}>
        <h3 className="custom-color">GET IN TOUCH</h3>
        <label htmlFor="full-name" className="custom-color">
          YOUR FULL NAME
        </label>
        <input
          type="text"
          name="user_name"
          id="full-name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email" className="custom-color">
          ENTER YOUR EMAIL
        </label>
        <input
          type="email"
          name="email_id"
          id="email"
          value={email}
          // onChange={(e) => validateEmail(e)}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="phone" className="custom-color">
          ENTER YOUR PHONE
        </label>
        <input
          type="number"
          min="0"
          name="phone"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <label htmlFor="message" className="custom-color">
          Contact or Message us
        </label>
        <textarea
          name="message"
          id="message"
          value={text}
          cols="70"
          rows="10"
          placeholder="type here"
          onChange={(e) => setText(e.target.value)}
          required
        />
        <input type="submit" id="contact" value="Send" />
      </form>
      <GoogleMap />
      <ContactCards />
    </section>
  );
};
export default Form;
