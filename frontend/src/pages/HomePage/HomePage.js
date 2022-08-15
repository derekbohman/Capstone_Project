import "./HomePage.css";
import React, { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="homeContainer">
      <div className="homeContent">
        <div className="homeBannerContainer"></div>
        <h1>Caitlynn Didlick, DACM, LAc</h1>
      </div>
      <div className="homeSpacer"></div>
    </div>
  );
};

export default HomePage;
