import "./ConsultationPage.css";
import React, { useEffect } from "react";
import Consultation from "../../components/Consultation/Consultation";

const ConsultationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="consultationContainer">
      <div className="consultationContent">
        <div className="consultationBannerContainer"></div>
        <h1>Consultation</h1>
        <p>
          I personally feel that nearly everyone can benefit from the services
          that I provide. However, every person is different with their
          abundances and defficiencies in their own bodies and some may benefit
          more than others.
        </p>
        <p>
          If you would like to see what Traditional Chinese Medicine for you,
          then I would highly recommend signing up for a free 20 minute
          consultation.
        </p>
        <p>
          In our consultation, we can discuss what Traditional Chinese Medicine
          services I can provide you, what eash service entails, and what you
          could expect from being a patient of mine. We can also discuss billing
          and insurance questions.
        </p>
        <p>
          Please fill out the form below to choose the best date and time that
          works for you to come into the office, and you will receive an email
          confirmation.
        </p>
        <Consultation />
      </div>
    </div>
  );
};

export default ConsultationPage;
