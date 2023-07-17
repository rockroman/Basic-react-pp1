import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
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
    <form className="my-form" onSubmit={handleSubmit}>
      <h3>GET IN TOUCH</h3>
      <label htmlFor="full-name">YOUR FULL NAME</label>
      <input
        type="text"
        name="full-name"
        id="full-name"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="email">ENTER YOUR EMAIL</label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="phone">ENTER YOUR PHONE</label>
      <input
        type="number"
        min="0"
        name="phone"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <label htmlFor="message">Contact or Message us</label>
      <textarea
        name="text"
        id="message"
        value={text}
        cols="70"
        rows="10"
        placeholder="type here"
        onChange={(e) => setText(e.target.value)}
        required
      />
      <input type="submit" id="contact" />
    </form>
  );
};
export default Form;
