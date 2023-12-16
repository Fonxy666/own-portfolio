import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { InputButton } from "../../Styles/Contact.Styled";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wcrwr6s', 'template_rfl8dro', form.current, 'UVQrOPr-xEZskSJps')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="container">
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label className="form-label">Name</label>
          <input placeholder="John Doe" type="name" id="name" className="form-control" name="user_name" />
        </div>
        <div>
        <label className="form-label">E-mail</label>
          <input placeholder="example@example.com" type="email" id="email" className="form-control" name="user_email" />
        </div>
        <div>
          <label className="form-label">Message</label>
          <textarea type="message" id="message" className="form-control" name="message" />
          <InputButton className="btn btn-secondary" type="submit" value="Send" style={{marginTop: "15px"}}/>
        </div>
      </form>
    </div>
  );
};

export default Contact;
