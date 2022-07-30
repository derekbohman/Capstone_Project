import "./TreatmentsPage.css";
import React from "react";
import { Link } from "react-router-dom";

const TreatmentsPage = () => {
  return (
    <div className="container">
      <h1>Treatments</h1>
      <div className="treatments">
        <div className="acupuncture">
          <Link to="/treatments/acupuncture">
            <div className="acupunctureLink">
              <p>Acupuncture</p>
            </div>
          </Link>
        </div>
        <div className="herbalMedicine">
          <Link to="/treatments/herbalMedicine">
            <div className="herbalMedicineLink">
              <p>Herbal Medicine</p>
            </div>
          </Link>
        </div>
        <div className="nutritionCounseling">
          <Link to="/treatments/nutritionCounseling">
            <div className="nutritionCounselingLink">
              <p>Nutrition Counseling</p>
            </div>
          </Link>
        </div>
        <div className="cupping">
          <Link to="/treatments/cupping">
            <div className="cuppingLink">
              <p>Cupping</p>
            </div>
          </Link>
        </div>
        <div className="moxibustion">
          <Link to="/treatments/moxibustion">
            <div className="moxibustionLink">
              <p>Moxibustion</p>
            </div>
          </Link>
        </div>
        <div className="massage">
          <Link to="/treatments/massage">
            <div className="massageLink">
              <p>Massage</p>
            </div>
          </Link>
        </div>
        <div className="guaSha">
          <Link to="/treatments/guaSha">
            <div className="guaShaLink">
              <p>Gua Sha</p>
            </div>
          </Link>
        </div>
        <div className="yoga">
          <Link to="/treatments/yoga">
            <div className="yogaLink">
              <p>Yoga</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TreatmentsPage;
