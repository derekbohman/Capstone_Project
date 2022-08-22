import "./ProductsPage.css";
import React, { useEffect } from "react";

const ProductsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="productsContainer">
      <h1>Products</h1>
      <p>
        Below is an assortment of practices for which you can purchase items
        from me for use at home. For a more in depth view of items I have for
        sale, please visit my clinic and I'd be happy to show you what is
        available.
      </p>
      <div className="products">
        <div className="herbs">
          <div className="herbsLink">
            <p>Herbs</p>
          </div>
        </div>
        <div className="tinctures">
          <div className="tincturesLink">
            <p>Tinctures</p>
          </div>
        </div>
        <div className="guaShaTools">
          <div className="guaShaToolsLink">
            <p>Gua Sha Tools</p>
          </div>
        </div>
        <div className="yogaEquipment">
          <div className="yogaEquipmentLink">
            <p>Yoga Equipment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
