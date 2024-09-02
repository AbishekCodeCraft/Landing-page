import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="row mt-3" id="about">
            <div className="col-12">
              <div className="service-header">
                <h3>About</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="about-us-container">
                <fieldset className="about-us-fieldset">
                  <legend className="about-us-legend">ABOUT US</legend>
                  <p>
                    Abiding Technologies can provide you with a return on
                    investment for your out-of-service equipment. We offer both
                    remarketing and recycling services. Our highly trained team
                    of professionals can test, re-certify, and repackage your
                    out-of-service equipment or resell it. For equipment that is
                    not reusable, we offer a full range of recycling services.
                    We adhere to a zero landfill policy and our customers
                    received a certificate of destruction for their records. You
                    can rest assured knowing your assets have been handled in an
                    environmentally responsible manner.
                  </p>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
