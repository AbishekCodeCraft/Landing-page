import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import payment from "../../assets/payment.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-3" id="terms">
          <div className="col-12">
            <div className="service-header">
              <h3>Terms & Conditions</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bg">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="links">
                <div className="link-1">
                  <FaFacebook className="facebook" />
                </div>
                <div className="link-2">
                  <FaTwitter className="twitter" />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h5>TERMS AND CONDITIONS</h5>
              <p>
                Please note the following terms. By bidding on our auction you
                agree to all these terms:
              </p>
              <ol>
                <li>
                  The shipping and handling charge listed is for the lower 48
                  states only; other locations will be determined by destination
                  and method. For shipping to other locations, please contact us
                  for shipping and handling charge.
                </li>
                <li>
                  Payment must be made in full base on the term agree upon.
                </li>
                <li>
                  Every effort has been made to ensure the accuracy of all
                  information contained herein. Abiding Technologies, Inc makes
                  no warranty expressed or implied with respect to accuracy of
                  the information including product specifications. It is the
                  buyer's responsibility to insure that our product is
                  compatible with their computer system. Product and
                  manufacturer names are used only for the purpose of
                  identification.
                </li>
              </ol>
            </div>
          </div>

          <div className="row">
            <div className="col warranty">
              <h5>WARRANTY AND RETURN POLICY</h5>
              <ol style={{ listStyle: "none" }}>
                <li>
                  By bidding on our auction or purchasing thru our store, you
                  agree to the following warranty and return policy:
                  <p>
                    1. Any item we sell includes a DOA warranty, unless
                    specifically stated otherwise, such as "AS IS"
                  </p>
                </li>
                <li>
                  Any item covered under our DOA warranty that is not working
                  properly when received by the buyer will be covered under the
                  following terms:
                  <p>
                    1. Seller must be notified within 7 business days of receipt
                    of the purchased item of any problem or defects with the
                    item purchased. A Return Merchandise Authorization (RMA)
                    number will be given. No returns will be accepted without
                    this authorization.
                  </p>
                  <p>2. Buyer is responsible for return shipping costs.</p>
                  <p>
                    3. Upon receipt, item will be tested to determine condition.
                    After evaluation, if the item is not working and there are
                    no obvious signs of physical damage or improper use or
                    installation, a refund or replacement item will be issued.
                    Shipping costs are non-refundable.
                  </p>
                </li>
                <li>
                  We do not cover the following conditions under our warranty:
                  <p>
                    1. Buyer's inability or lack of experience and knowledge to
                    install and/or use the item purchased. This includes damage
                    done to item as a result of improper use or installation.
                    Inability of item purchased to function with a specific
                    software application. Incompatibility of item purchased with
                    buyer's computer system.
                  </p>
                  <p>
                    2. For returns that are not covered under our DOA warranty,
                    a 20% restocking fee will be charged.
                  </p>
                </li>
              </ol>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="payment">
                <img src={payment} alt="" />
              </div>
            </div>
          </div>

          <div className="row mt-2 copyright-section">
            <div className="col">
              <p>Copyright &copy; All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
