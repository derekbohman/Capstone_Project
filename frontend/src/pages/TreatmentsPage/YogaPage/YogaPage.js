import "./YogaPage.css";
import yoga4 from "../SupportingDocuments/yoga4.jpg";
import React, { useEffect } from "react";

const YogaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="yogaContainer">
      <div className="yogaContent">
        <div className="yogaBannerContainer"></div>
        <h1>Yoga</h1>
        <h2>What is Yoga?</h2>
        <p>
          Yoga is an ancient practice that involves physical poses,
          concentration, and deep breathing. A regular yoga practice can
          promoteTrusted Source endurance, strength, calmness, flexibility, and
          well-being.
        </p>
        <img src={yoga4} className="yoga4" />
        <p>
          Yoga is now a popular form of exercise around the world. According to
          a 2017 national surveyTrusted Source, one in seven adults in the
          United States practiced yoga in the past 12 months.
        </p>
        <h2>History</h2>
        <p>
          The first mention of the word “yoga” appears in Rig Veda, a collection
          of ancient texts. Yoga comes from the Sanskrit word “yuj,” which means
          “union” or “to join.” Yoga can be traced back to northern India over
          5,000 years ago. Indian monks spread their knowledge of yoga in the
          West during the late 1890s. Modern yoga teachings became widely
          popular in Western countries by the 1970s.
        </p>
        <h2>Philosophy</h2>
        <p>
          The overall philosophy of yoga is about connecting the mind, body, and
          spirit. There are six branches of yoga. Each branch represents a
          different focus and set of characteristics.
        </p>
      </div>
    </div>
  );
};

export default YogaPage;
