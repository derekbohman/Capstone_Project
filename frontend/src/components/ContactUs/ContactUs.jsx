import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m59v9g5",
        "contact_form",
        form.current,
        "-RZSKyHv72ksCKUPN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form className="form" ref={form} onSubmit={sendEmail}>
      <div className="contactUsContainer">
        <label>
          Name: <input type="text" name="user_name" value={form.userName} />
        </label>
        <label>
          Email: <input type="email" name="user_email" value={form.userEmail} />
        </label>
        <input type="submit" value="Send" />
      </div>
    </form>
  );
};

export default ContactUs;
