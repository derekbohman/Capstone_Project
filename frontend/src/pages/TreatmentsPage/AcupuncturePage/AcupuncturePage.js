import "./AcupuncturePage.css";
import acupuncture2 from "../SupportingDocuments/acupuncture2.jpg";
import acupuncture3 from "../SupportingDocuments/acupuncture3.jpg";
import React, { useEffect } from "react";

const AcupuncturePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="acupunctureContainer">
      <div className="acupunctureContent">
        <div className="acupunctureBannerContainer"></div>
        <h1>Acupuncture</h1>
        <h2>
          Acupuncture Can Relieve Pain and Improve Sleep, Digestion and
          Emotional Well-being.
        </h2>
        <p>
          Acupuncture is a 3,000-year-old healing technique of Traditional
          Chinese Medicine. In 1997, the U.S. National Institutes of Health
          (NIH) documented and publicized acupuncture’s safety and efficacy for
          treating a wide range of conditions. Acupuncture is now covered by
          many insurance policies and is used most broadly to relieve pain.
        </p>

        <h2>How does acupuncture work?</h2>
        <img src={acupuncture2} className="acupuncture2" />
        <p>
          Acupuncture improves the body’s functions and promotes the natural
          self-healing process by stimulating specific anatomic sites--commonly
          referred to as acupuncture points, or acupoints. The most common
          method used to stimulate acupoints is the insertion of fine, sterile
          needles into the skin. Pressure, heat, or electrical stimulation may
          further enhance the effects. Other acupoint stimulation techniques
          include: manual massage, moxibustion or heat therapy, cupping, and the
          application of topical herbal medicines and linaments.
        </p>

        <p>
          Traditional Chinese Medicine is based on an ancient philosophy that
          describes the universe, and the body, in terms of two opposing forces:
          yin and yang. When these forces are in balance, the body is healthy.
          Energy, called "qi" (pronounced "chee") flows along specific pathways,
          called meridians, throughout the body. This constant flow of energy
          keeps the yin and yang forces balanced. However, if the flow of energy
          gets blocked, like water getting stuck behind a dam, the disruption
          can lead to pain, lack of function, or illness. Acupuncture therapy
          can release blocked qi in the body and stimulate function, evoking the
          body’s natural healing response through various physiological systems.
          Modern research has demonstrated acupuncture’s effects on the nervous
          system, endocrine and immune systems, cardiovascular system, and
          digestive system. By stimulating the body’s various systems,
          acupuncture can help to resolve pain, and improve sleep, digestive
          function, and sense of well-being.
        </p>

        <h2>What happens during an acupuncture treatment?</h2>
        <img src={acupuncture3} className="acupuncture3" />
        <p>
          First, your acupuncturist will ask about your health history. Then, he
          or she will examine your tongue’s shape, color, and coating, feel your
          pulse, and possibly perform some additional physical examinations
          depending on your individual health needs. Using these unique
          assessment tools, the acupuncturist will be able to recommend a proper
          treatment plan to address your particular condition. To begin the
          acupuncture treatment, you lay comfortably on a treatment table while
          precise acupoints are stimulated on various areas of your body. Most
          people feel no or minimal discomfort as the fine needles are gently
          placed. The needles are usually retained between five and 30 minutes.
          During and after treatments, people report that they feel very
          relaxed.
        </p>

        <h2>How many treatments will I need?</h2>
        <p>
          The frequency and number of treatments differ from person to person.
          Some people experience dramatic relief in the first treatment. For
          complex or long-standing chronic conditions, one to two treatments per
          week for several months may be recommended. For acute problems,
          usually fewer visits are required, usually eight to ten visits in
          total. An individualized treatment plan that includes the expected
          number of treatments will be discussed during your initial visit.
        </p>

        <h2>What conditions are commonly treated by acupuncture?</h2>
        <p>
          Hundreds of clinical studies on the benefits of acupuncture show that
          it successfully treats conditions ranging from musculoskeletal
          problems (back pain, neck pain, and others) to nausea, migraine
          headache, anxiety, depression, insomnia, and infertility.
        </p>
      </div>
    </div>
  );
};

export default AcupuncturePage;
