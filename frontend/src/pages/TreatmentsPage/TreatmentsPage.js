import "./TreatmentsPage.css";
import React from "react";

const TreatmentsPage = () => {
  return (
    <div className="container">
      <h1>Treatments</h1>
      <div className="treatments">
        <div className="acupuncture">
          <b>Acupuncture</b>
        </div>
        <div className="herbalMedicine">
          <b>Herbal Medicine</b>
        </div>
        <div className="nutritionCounseling">
          <b>Nutrition Counseling</b>
        </div>
        <div className="cupping">
          <b>Cupping</b>
        </div>
        <div className="moxibustion">
          <b>Moxibustion</b>
        </div>
        <div className="massage">
          <b>Massage</b>
        </div>
        <div className="guaSha">
          <b>Gua Sha</b>
        </div>
      </div>
    </div>
  );
};

export default TreatmentsPage;
