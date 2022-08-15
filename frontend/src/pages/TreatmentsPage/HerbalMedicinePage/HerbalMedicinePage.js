import "./HerbalMedicinePage.css";
import herbs2 from "../SupportingDocuments/herbs2.jpg";
import herbs4 from "../SupportingDocuments/herbs4.jpg";
import React, { useEffect } from "react";

const HerbalMedicinePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="herbalMedicineContainer">
      <div className="herbalMedicineContent">
        <div className="herbalMedicineBannerContainer"></div>
        <h1>Herbal Medicine</h1>
        <h2>Yin and Yang</h2>
        <img src={herbs2} className="herbs2" />
        <p>
          The ancient Chinese proposed that every living thing is sustained by a
          balance of two opposing forces of energy, called Yin and Yang.
          Together, they make up the life essence, or Qi - a type of energy that
          flows through the body via invisible channels called meridians. Half
          of certain organs and meridians are governed by Yin and the other half
          by Yang. When Yin and Yang are out of balance in the body, this causes
          a blockage of Qi and a subsequent illness. Yin and Yang imbalances can
          be caused by stress, pollution, poor diet, emotional upsets or
          infection. For diagnostic purposes, Yin and Yang are further
          subdivided into interior and exterior, hot and cold, deficiency and
          excess.
        </p>
        <h2>The five elements in Chinese herbal medicine</h2>
        <p>
          The TCM philosophy proposes that everything including organs of the
          body - is composed of the five elements: fire, earth, metal, water and
          wood. The herbs are similarly classified into the five tastes - sweet,
          salty, bitter, pungent and sour - which correspond to the five
          elements, for example, since the skin is a metal element Yang organ,
          it would be treated with a pungent herb.
        </p>
        <h2>Herbs used in Chinese medicine</h2>
        <img src={herbs4} className="herbs4" />
        <p>
          Chinese herbal medicines are mainly plant based, but some preparations
          include minerals or animal products. They can be packaged as powders,
          pastes, lotions or tablets, depending on the herb and its intended
          use. Different herbs have different properties and can balance
          particular parts of the body. Prescribing a particular herb or
          concoction of herbs means the practitioner’s diagnosis has to take
          into account the state of the patient’s Yin and Yang, and the elements
          that are governing the affected organs.
        </p>
        <h2>Additional treatment and advice</h2>
        <p>
          Your practitioner might advise you to make specific changes in your
          diet, such as avoiding spicy foods or alcohol. Foods are believed to
          either ‘heat’ or ‘cool’ the constitution, making dietary changes an
          important part of the healing process. Acupuncture might also be used
          to treat disrupted Qi.
        </p>
      </div>
    </div>
  );
};

export default HerbalMedicinePage;
