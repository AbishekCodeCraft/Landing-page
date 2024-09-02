import React from "react";
import "./Contact.css";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="row mt-3" id="contact">
            <div className="col-12">
              <div className="service-header">
                <h3>Contact</h3>
              </div>
            </div>
          </div>

          <div styleName="row ">
            <div className="col">
              <div className="contact-section">
                <div className="card card-box">
                  <div className="phone">
                    <FaPhoneAlt className="icon" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">CALL US NOW!</h5>
                    <h5>(404-647-5008)</h5>
                    <h5>someemail@gmail.com</h5>
                    <p className="card-text">
                      We'll be happy to answer any questions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
