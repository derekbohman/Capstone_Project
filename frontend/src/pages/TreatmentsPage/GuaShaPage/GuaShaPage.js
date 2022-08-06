import "./GuaShaPage.css";
import guaSha3 from "../SupportingDocuments/guaSha3.jpg";
import guaSha4 from "../SupportingDocuments/guaSha4.jpg";
import React from "react";

const GuaShaPage = () => {
  return (
    <div className="guaShaContainer">
      <div className="guaShaContent">
        <div className="guaShaBannerContainer"></div>
        <h1>Gua Sha</h1>
        <h2>What is gua sha?</h2>
        <img src={guaSha3} className="guaSha3" />
        <p>
          Gua sha is rooted in traditional Chinese medicine (TCM). According to
          the principles of TCM, your qi (pronounced “chi”), or energy, must
          flow throughout your body so you can feel your best. When qi becomes
          stagnant in certain areas, it’s believed that health problems can
          occur. With gua sha, a practitioner (an acupuncturist in many cases)
          will use a smooth-edged tool to gently scrape areas of your body where
          there is inflammation or stagnant qi to help improve circulation and
          promote healing.
        </p>
        <h2>Does gua sha hurt?</h2>
        <p>
          Reading that gua sha involves “scraping,” might make you cringe.
          However, a practitioner won’t be scraping your body like a car
          windshield in the middle of winter. Gua sha is gentle overall, and the
          intensity can build depending on the types of knots that your
          acupuncturist encounters.
        </p>
        <img src={guaSha4} className="guaSha4" />
        <p>
          Gua sha tools have smooth, rounded edges. They’re not going to cut,
          stab or pinch you. Before your acupuncturist starts, they’ll massage
          the treatment area with cream or lotion first and then take things to
          your comfort level. An acupuncturist won’t just dig in as hard as they
          can right away on a point. They’re going to find the tense tissue,
          work on it gently and gradually build up the intensity to promote
          circulation to help break up the areas that are all twisted up.
        </p>
        <h2>The benefits of gua sha</h2>
        <p>
          It’s been reported that gua sha can help relieve several health
          conditions. Gua sha is good for musculoskeletal problems, especially
          major ones like tightness in the shoulders, legs and back. It can also
          help alleviate tension headaches, migraines, neck pain or swelling in
          your body. Gua sha can even help with anxiety, fatigue, insomnia and
          perimenopausal symptoms when done in addition to acupuncture.
        </p>
      </div>
    </div>
  );
};

export default GuaShaPage;
