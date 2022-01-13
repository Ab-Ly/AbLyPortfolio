import React from "react";
import { FiPhone, FiMapPin, FiFile } from "react-icons/fi";

const AboutFive = () => {
  return (
    <div className="about-style-5 rn-section-gapBottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="row row--0 about-wrapper align-items-center theme-shape">
              <div className="col-lg-6">
                <div className="thumbnail">
                  <img src="./images/about/about-05.png" alt="About Images" />
                </div>
              </div>
              <div className="col-lg-6 mt_md--30 mt_sm--30">
                <div className="content">
                  <div className="inner">
                    <h4 className="title">I'm Full-Stack JS Web Developer</h4>
                    <p>Web developer working as FreeLancer .</p>
                    <ul className="contact-address">
                      <li>
                        <FiFile /> Full-Stack JS Web Developer
                      </li>
                      <li>
                        <FiPhone /> +2126 19 18 40 98
                      </li>
                      <li>
                        <FiMapPin /> Fès, Morocco.
                      </li>
                    </ul>
                    <div className="download-button mt--20">
                      <a
                        className="btn-read-more"
                        href="https://www.icloud.com/iclouddrive/094Nr9nijyA6hpuwl28TqB8zw#CV%5FLYOUSSEFI%5FABDELALI%5FLAST"
                      >
                        <span>Download My CV</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutFive;
