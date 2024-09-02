import React from "react";
import "./Services.css";
import hardware from "../../assets/hardware.jpeg";
import software from "../../assets/software.jpg";
import it from "../../assets/it.jpg";

const Services = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="row mt-3" id="services">
            <div className="col-12">
              <div className="service-header">
                <h3>Services</h3>
              </div>
            </div>
          </div>

          <div className="row mt-3 ">
            <div className="col-4">
              <div className="card" style={{ width: "22rem" }}>
                <img src={hardware} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    Buy New/Used & Refurbished IT Telco Hardware
                  </h5>
                  <p className="card-text">
                    Abiding Technologies is your one stop shop for building and
                    maintaining your business. We offer new, used and
                    refurbished IT & Telco Equipment, office equipment and
                    furniture.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="card" style={{ width: "22rem" }}>
                <img src={software} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    Asset Recovery and Recycling Solution
                  </h5>
                  <p className="card-text">
                    We can provide your business with Asset Remarketing services
                    and responsible recycling options for your obsolete assets.
                    We are focused on lowering your business infrastructure cost
                    while maintaining quality.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="card" style={{ width: "22rem" }}>
                <img src={it} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">IT & Telco</h5>
                  <p className="card-text">
                    We provide our customers with price competitive hardware
                    from major vendors such as Cisco, HP, Dell, IBM and Avaya to
                    name a few.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
