import "./MassagePage.css";
import massage3 from "../SupportingDocuments/massage3.jpg";
import massage4 from "../SupportingDocuments/massage4.jpg";
import React, { useEffect } from "react";

const MassagePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="massageContainer">
      <div className="massageContent">
        <div className="massageBannerContainer"></div>
        <h1>Massage</h1>
        <h2>What is Tuina Massage?</h2>
        <p>
          Tuina or tui-na (pronounced twee-nah) massage originated in ancient
          China and is believed to be the oldest system of bodywork. It’s one of
          the four main branches of traditional Chinese medicine, along with
          acupuncture, qi gong, and Chinese herbal medicine.
        </p>
        <img src={massage3} className="massage3" />
        <p>
          It’s based on the theory that imbalances of qi, which is the body’s
          vital life force or energy, can cause blockages or imbalances that
          lead to symptoms such as pain and illness.
        </p>
        <p>
          Tuina massage stimulates the flow of qi to promote balance and harmony
          within the body using many of the same principles of acupuncture.
        </p>
        <p>
          It’s similar to acupuncture in the way it targets specific acupoints,
          but practitioners use fingers instead of needles to apply pressure to
          stimulate these points. Tuina massage is often used in combination
          with acupuncture.
        </p>
        <h2>How it works</h2>
        <p>
          The philosophy and principles of tuina massage are based on
          traditional Chinese medicine, which focuses on emotional and physical
          components of a person’s well-being, as well as aspects such as
          climate, relationships, and diet.
        </p>
        <p>
          The underlying philosophy of tuina massage is that true health is
          achieved when one has found harmony and balance inside the self and
          their environment.
        </p>
        <p>
          The goal of tuina massage is to create harmony in the yin and yang of
          the body by getting rid of blockages and disturbances that manifest as
          illness, disease, and emotional issues.
        </p>
        <p>
          Similar to acupuncture, tuina massage uses the same energetic
          meridians and acupoints to balance the qi and blood in your body,
          leading to better health. Qi that’s flowing incorrectly can cause
          blockages, such as poor blood circulation in the affected area.
        </p>
        <p>
          The main therapeutic goal of tuina massage is to remove the energetic
          blocks that are causing qi stagnation.
        </p>
        <h2>Technique</h2>
        <img src={massage4} className="massage4" />
        <p>
          During a session, practitioners use oscillating and pressure
          techniques that differ in force and speed. Tuina massage can be done
          as a stronger deep-tissue massage or a more gentle, energetic
          treatment.
        </p>
        <p>
          Some techniques are more yin, which is more gentle, passive, and
          meditative. The yang approach is more active, dynamic, and physical,
          creating more intense sensations by stimulating deep blockages and
          knots.
        </p>
        <p>
          Tuina massage uses massage techniques such as acupressure, myofascial
          release, and reflexology. Sometimes, techniques that are common to
          osteopathy and chiropractic, such as stretching and joint
          mobilizations, are also used.
        </p>
        <h2>What does it treat?</h2>
        <p>
          Tuina massage can be used to treat specific health concerns or areas
          in the body. Since tuina massage is considered to be an alternative
          treatment, it’s essential that you talk to your doctor before using it
          to treat any medical condition.
        </p>
        <p>
          Tuina massage can be used to treat pain and illness, or to maintain
          good health. The technique is effective in reducing stress,
          encouraging relaxation, and deepening sleep. It’s often used for
          conditions and injuries related to the musculoskeletal and nervous
          systems.
        </p>
      </div>
    </div>
  );
};

export default MassagePage;
