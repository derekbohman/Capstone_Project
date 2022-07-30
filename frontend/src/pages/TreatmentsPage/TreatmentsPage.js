import "./TreatmentsPage.css";
import React from "react";

const TreatmentsPage = () => {
  return (
    <div className="container">
      <h1>Treatments</h1>
      <div className="treatments">
        <div className="acupuncture">
          <p>Acupuncture</p>
        </div>
        <div className="herbalMedicine">
          <p>Herbal Medicine</p>
        </div>
        <div className="nutritionCounseling">
          <p>Nutrition Counseling</p>
        </div>
        <div className="cupping">
          <p>Cupping</p>
        </div>
        <div className="moxibustion">
          <p>Moxibustion</p>
        </div>
        <div className="massage">
          <p>Massage</p>
        </div>
        <div className="guaSha">
          <p>Gua Sha</p>
        </div>
        <div className="yoga">
          <p>Yoga</p>
        </div>
      </div>
    </div>
  );
};

export default TreatmentsPage;
