import "./AboutPage.css";
import provider from "./SupportingDocuments/provider.jpg";
import React from "react";

const AboutPage = () => {
  return (
    <div className="container">
      <div className="aboutContent">
        <div className="bannerContainer"></div>
        <h1>About Caitlynn</h1>
        <p>
          My name is Caitlynn. I live in the Portland, Oregon metropolitan area.
          My childhood was filled with mountains, rivers, coastlines, and
          forests. Growing up, I always had a passion for cooking and nutrition,
          self-care, gathering wild herbs, and concocting home remedies.
        </p>
        <img src={provider} alt="Provider" className="provider" />
        <p>
          In 2015, at the age of 23, after years of dealing with painful periods
          that would leave me bed-bound for the first few days, I decided I’d
          had enough. I made an appointment with my OBGYN, and after performing
          an ultrasound and laparoscopic surgery, I was diagnosed with
          endometriosis. It was a relief to finally see what was happening
          inside of my body in order to validate my experience.
        </p>
        <p>
          When I met back up with the OBGYN for a post-op, she told me that my
          only option for relief would be to go on a heavy dose of hormonal
          birth control. I was devastated. Up until 2014, I had been on birth
          control for 7 years, and during that time I had experienced headaches
          nearly every day, and weekly migraines. I had been feeling so much
          better since coming off and I really didn’t want to return to that
          reality. I went home feeling very confused and hopeless.
        </p>
        <p>
          However, at some point that evening, I remembered an article I had
          read a few months back, from MindBodyGreen that had talked about
          managing endometriosis naturally. At the time, I was living in the
          small town of Hood River, and, after a quick online search, I found a
          local naturopath and set up an appointment. Within a few days, I was
          knocking on the door of this tiny and unobtrusive building, and so
          began my deep dive into holistic medicine.
        </p>
        <p>
          My own journey of successfully treating my endometriosis through
          alternative medicine is what inspired me to follow a career in women’s
          health. I believe that a combination of nutrition, Chinese Medicine
          (acupuncture, cupping, Chinese herbs, Chinese food therapy), western
          herbs, and mindfulness can help to restore the health and vitality of
          the female system. I find that health is best accomplished when the
          practitioner and the patient form a team together, with the intention
          of restoring the body’s inherent balance.
        </p>
        <p>
          In 2018, I received my Bachelor of Science in Nutrition from the
          National University of Natural Medicine in Portland, Oregon.
          Currently, I am attending the Oregon College of Oriental Medicine and
          finishing up my Master and Doctorate of Acupuncture and Oriental
          Medicine. I am also a certified yoga instructor and a novice gardener
          of western herbs.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
