import "./NewsletterPage.css";
import React, { useEffect } from "react";
import Newsletter from "../../components/Newsletter/Newsletter";
// import newsletter2 from "../NewsletterPage/SupportingDocuments/newsletter2.jpg";

const NewsletterPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="newsletterContainer">
      <div className="newsletterContent">
        <div className="newsletterBannerContainer"></div>
        <h1>Newsletter</h1>
        {/* <img src={newsletter2} className="newsletter2" /> */}
        <p>
          I love speaking with people about the things I've learned and
          experienced in the healthcare field. I find that, the more that people
          can educate themselves, the higher the odds are that they'll be able
          to make better and better decisions for their health.
        </p>
        <p>
          If you would like to receive more information about Traditional
          Chinese Medicine and the treatments that I provide, along with things
          that I'm currently studying and researching, please sign up for my
          newsletter.
        </p>
        <Newsletter />
        <div className="newsletterSpacer"></div>
      </div>
    </div>
  );
};

export default NewsletterPage;
