import "./CuppingPage.css";
import cupping3 from "../SupportingDocuments/cupping3.jpg";
import cupping4 from "../SupportingDocuments/cupping4.jpg";
import React from "react";

const CuppingPage = () => {
  return (
    <div className="container">
      <div className="cuppingContent">
        <div className="cuppingBannerContainer"></div>
        <h1>Cupping</h1>
        <h2>What Is Chinese Cupping? What Does it Do for You?</h2>
        <p>
          Cupping is the term applied to a technique that uses small glass cups
          or bamboo jars as suction devices that are placed on the ski to
          disperse and break up stagnation and congestion by drawing congested
          blood, energy or other humors to the surface. In dry cupping, the
          therapist will simply place the suction cups on the skin. In wet
          cupping, the practitioner will make a small incision on the skin and
          then apply the suction cup to draw out small amounts of blood.
        </p>
        <img src={cupping3} className="cupping3" />
        <p>
          There are several ways that a practitioner can create the suction in
          the cups. One method involves swabbing rubbing alcohol onto the bottom
          of the cup, then lighting it and putting the cup immediately against
          the skin. Suction can also be created by placing an inverted cup over
          a small flame, or by using an alcohol-soaked cotton pad over an
          insulating material (like leather) to protect the skin, then lighting
          the pad and placing an empty cup over the flame to extinguish it.
          Flames are never used near the skin and are not lit throughout the
          process of cupping, but rather are a means to create the heat that
          causes the suction within the small cups.
        </p>
        <p>
          Once the suction has occurred, the cups can be gently moved across the
          skin (often referred to as “gliding cupping). Medical massage oils are
          sometimes applied to improve movement of the glass cups along the
          skin. The suction in the cups causes the skin and superficial muscle
          layer to be lightly drawn into the cup. Cupping is much like the
          inverse of massage – rather than applying pressure to muscles, it uses
          gentle pressure to pull them upward. For most patients, this is a
          particularly relaxing and relieving sensation. Once suctioned, the
          cups are generally left in place for about ten minutes while the
          patient relaxes. This is similar to the practice of Tui Na, a
          traditional Chinese medicine massage technique that targets
          acupuncture points as well as painful body parts, and is well known to
          provide relief through pressure.
        </p>
        <p>
          The side effects of cupping are fairly mild. Bruising should be
          expected, but skin should return to looking normal within 10 days.
          Other potential side effects include mild discomfort, skin infection,
          or burns. However, a trained health professional will apply an
          antibiotic ointment and bandage to prevent an infection.
        </p>
        <h2>
          The Philosophy Behind Pain and Cupping. What is Cupping Used For?
        </h2>
        <img src={cupping4} className="cupping4" />
        <p>
          “Where there’s stagnation, there will be pain. Remove the stagnation,
          and you remove the pain.”
        </p>
        <p>
          The old Chinese medical maxim holds that pain results from the
          congestion, stagnation, and blockage of Qi, or vital energy, vital
          fluids, lymph, phlegm, and blood. If pain is the essence of disease,
          then suffering is a result of obstructed or irregular flow in the
          body. Chinese cupping is therefore a method of breaking up the
          blockage to restore the body’s natural flow of energy.
        </p>
        <h2>Cupping Combined With Acupuncture</h2>
        <p>
          Generally, cupping is combined with acupuncture in one treatment, but
          it can also be used alone. The suction and negative pressure provided
          by cupping can loosen muscles, encourage blood flow, and sedate the
          nervous system (which makes it an excellent treatment for high blood
          pressure). Cupping is used to relieve back and neck pains, stiff
          muscles, anxiety, fatigue, migraines, rheumatism, and even cellulite.
          For weight loss and cellulite treatments, oil is first applied to the
          skin, and then the cups are moved up and down the surrounding area.
        </p>
        <p>
          Like acupuncture, cupping follows the lines of the meridians. There
          are five meridian lines on the back, and these are where the cups are
          usually placed. Using these points, cupping can help to align and
          relax qi, as well as target more specific maladies. By targeting the
          meridian channels, cupping strives to ‘open’ these channels – the
          paths through which life energy flows freely throughout the body,
          through all tissues and organs, thus providing a smoother and more
          free-flowing qi (life force). Cupping is one of the best deep-tissue
          therapies available. It is thought to affect tissues up to four inches
          deep from the external skin. Toxins can be released, blockages can be
          cleared, and veins and arteries can be refreshed within these four
          inches of affected materials. Even hands, wrists, legs, and ankles can
          be ‘cupped,’ thus applying the healing to specific organs that
          correlate with these points.
        </p>
      </div>
    </div>
  );
};

export default CuppingPage;
