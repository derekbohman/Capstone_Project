import "./NutritionCounselingPage.css";
import nutrition3 from "../SupportingDocuments/nutrition3.jpg";
import nutrition4 from "../SupportingDocuments/nutrition4.jpg";
import React, { useEffect } from "react";

const NutritionCounselingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="nutritionCounselingContainer">
      <div className="nutritionCounselingContent">
        <div className="nutritionCounselingBannerContainer"></div>
        <h1>Nutrition Counseling</h1>
        <h2>Why Do I Need This?</h2>
        <img src={nutrition3} className="nutrition3" />
        <p>
          Nutrition counseling plays a crucial part in the whole body approach
          to wellness that TCM strives to accomplish. While exercise,
          acupuncture, and other approaches provide an incredible amount of
          support, if the body can't get the nutrients that it needs, it can't
          do it's job to heal and recover like it evolved to do.
        </p>
        <h2>The Importance of Proper Nutrition.</h2>
        <p>
          I firmly believe that the body is capable of doing amazing things and
          the keystone to its ability to do this is by feeding it a healthy
          diet. In my practice, I use my own personal experience with nutrition
          and my endometriosis, along with my training in nutrition that I
          received from NUNM, to provide my patients with a solid nutritional
          plan for them to follow to start healing the body from the inside.
        </p>
        <h2>What Does This Mean For the Patient?</h2>
        <img src={nutrition4} className="nutrition4" />
        <p>
          This is an especially important step for my patients because, while I
          can perform treatments and services, I can't be there to make sure you
          eat what you should be eating. As the patient takes ownership of their
          diet and makes better and better diet decisions, we as a team can then
          combine that with other treatments to create a wonderful whole body
          plan.
        </p>
      </div>
    </div>
  );
};

export default NutritionCounselingPage;
