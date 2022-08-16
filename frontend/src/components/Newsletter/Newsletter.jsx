import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Newsletter.css";

const Newsletter = () => {
  const form = useRef();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_m59v9g5",
        "newsletter_form",
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
    setFirstName("");
    setEmail("");
  };

  return (
    <div className="newsletterContainer">
      <form className="form" ref={form} onSubmit={sendEmail}>
        <label>
          First Name:{""}
          <input
            type="text"
            name="user_name"
            onChange={(event) => setFirstName(event.target.value)}
            value={firstName}
          />
        </label>
        <label>
          Email:{""}
          <input
            type="email"
            name="user_email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
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

export default Newsletter;
