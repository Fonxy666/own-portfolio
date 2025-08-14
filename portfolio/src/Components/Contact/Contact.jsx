import { useRef, useState } from 'react';
import { InputButton } from "../../Styles/Contact.Styled";

const Contact = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    try {
      const response = await fetch("https://formspree.io/f/xovlbewp", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' },
      });

      if (response.ok) {
        alert("Message snet successfully!")
        form.current.reset();
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
        alert("Failed to send message.");
      console.error(error);
    }
  };

  return (
    <div className="container">
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label className="form-label">Name</label>
          <input placeholder="John Doe" type="text" className="form-control" name="name" required />
        </div>
        <div>
          <label className="form-label">E-mail</label>
          <input placeholder="example@example.com" type="email" className="form-control" name="email" required />
        </div>
        <div>
          <label className="form-label">Message</label>
          <textarea className="form-control" name="message" required />
          <InputButton className="btn btn-secondary" type="submit" value="Send" style={{ marginTop: "15px" }} />
        </div>
      </form>
    </div>
  );
};

export default Contact;