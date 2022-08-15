import "./NewsletterPage.css";
import React, { useEffect } from "react";
import ContactUs from "../../components/ContactUs/ContactUs";

const NewsletterPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="newsletterContainer">
      <div className="newsletterContent">
        <div className="newsletterContainer"></div>
        <h1>Newsletter</h1>
        <ContactUs />
      </div>
    </div>
  );
};

export default NewsletterPage;
