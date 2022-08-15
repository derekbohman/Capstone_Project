import "./MoxibustionPage.css";
import moxibustion3 from "../SupportingDocuments/moxibustion3.jpg";
import moxibustion4 from "../SupportingDocuments/moxibustion4.jpg";
import React, { useEffect } from "react";

const MoxibustionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="moxibustionContainer">
      <div className="moxibustionContent">
        <div className="moxibustionBannerContainer"></div>
        <h1>Moxibustion</h1>
        <h2>What is moxibustion?</h2>
        <img src={moxibustion3} className="moxibustion3" />
        <p>
          Mugwort, or artemisia, is a flowering plant in the daisy family. It’s
          used in foods eaten around the world, including German Christmas
          goose, Korean clam soup and a green Japanese dessert known as kusa
          mochi.
        </p>
        <p>
          It’s also the key to moxibustion. Mugwort leaves are dried and ground
          into small sticks or cones called moxa (similar to incense), which are
          then lighted and used to warm points on your body and relieve a
          variety of conditions. In TCM, the concepts of yin and yang balance
          each other, but imbalances can lead to illness.
        </p>
        <h2>How is moxibustion done?</h2>
        <img src={moxibustion4} className="moxibustion4" />
        <p>
          Direct moxibustion is when your practitioner places moxa cones
          directly onto your skin. More common in the United States, though, is
          indirect moxibustion, when the burning moxa doesn’t directly touch
          your body.
        </p>
        <h2>Does moxibustion hurt?</h2>
        <p>
          It shouldn’t! With indirect moxibustion, the moxa never touches your
          skin. And even with direct moxa, you should only feel heat and warmth,
          but not pain; your practitioner should remove the moxa before it burns
          or blisters.
        </p>
      </div>
    </div>
  );
};

export default MoxibustionPage;
