import "./InventoryPage.css";
import React, { useEffect } from "react";

const InventoryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="inventoryContainer">
      <div className="inventoryContent">
        <div className="inventoryBannerContainer"></div>
        <h1>Caitlynn Didlick, DACM, LAc</h1>
      </div>
      <div className="inventorySpacer"></div>
    </div>
  );
};

export default InventoryPage;
