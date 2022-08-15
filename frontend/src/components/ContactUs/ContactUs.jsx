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
    <div className="contactUsContainer">
      <form className="form" ref={form} onSubmit={sendEmail}>
        <label>
          First Name:{" "}
          <input
            type="text"
            name="user_name"
            className="inputName"
            value={form.userName}
          />
        </label>
        <label>
          Email:{" "}
          <input
            type="email"
            name="user_email"
            className="inputEmail"
            value={form.userEmail}
          />
        </label>
        {/* <input type="submit" className="submitButton" value="Send" /> */}
        <button type="submit" className="submitButton">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
