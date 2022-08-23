import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Consultation.css";

const Consultation = () => {
  const form = useRef();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_m59v9g5",
        "consultation_form",
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
    setDate("");
    setTime("");
  };

  return (
    <div className="consultationContainer">
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
        <label>
          Date:{""}
          <input
            type="date"
            name="user_date"
            onChange={(event) => setDate(event.target.value)}
            value={date}
          />
        </label>
        <label>
          Time:{""}
          <input
            type="time"
            name="user_time"
            onChange={(event) => setTime(event.target.value)}
            value={time}
          />
        </label>
        <button type="submit" className="submitButton">
          Send
        </button>
      </form>
    </div>
  );
};

export default Consultation;
