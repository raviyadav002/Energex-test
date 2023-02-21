import React from "react";
import flex from "../assets/png/flex.png";
import hand from "../assets/png/hand.png";
import screen from "../assets/png/screen.png";
import corona from "../assets/png/corona.png";
import global from "../assets/png/global.png";
import small from "../assets/png/small.png";
function Service() {
  return (
    <section className="bg_color py-5 position-relative">
      <div className="container">
        <img
          className="position-absolute top-0 start-0 d-none d-lg-flex"
          src={corona}
          alt="corona"
        />
        <img
          className="position-absolute end-0 bottom-0 d-none d-lg-flex"
          src={small}
          alt="small"
        />
        <img
          className="position-absolute end d-none d-lg-flex"
          src={global}
          alt="global"
        />
        <div className="text-center">
          <p className="fw_700 fs_20 ff_monts text-white">OUR SERVICES</p>
          <h2 className="fw_700 fs_40 ff_monts text-white">
            All you need is here
          </h2>
          <p className="fw_400 fs_16 opacity ff_monts text-white">
            A new home for your mining equipment
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-6 col-md-4">
            <div className="box text-center py-3 px-3">
              <img src={flex} alt="flex" />
              <h2 className="fw_700 fs_20 ff_monts text-white mt-3">POWER</h2>
              <p className="fw_400 fs_16 text-white ff_monts">
                We utilize off-grid, natural gas resources to generate low cost
                energy to fuel our mining operation.{" "}
              </p>
              <a className="fw_500 fs_16 ff_monts text-white" href="#">
                Read More &rarr;
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="box text-center py-3 px-3">
              <img src={hand} alt="hand" />
              <h2 className="fw_700 fs_20 ff_monts text-white mt-3">
                TECH SERVICE
              </h2>
              <p className="fw_400 fs_16 text-white ff_monts">
                Our team provides 24/7 support toward maintaining maximum uptime
                on power generation.
              </p>
              <a className="fw_500 fs_16 ff_monts text-white" href="#">
                Read More &rarr;
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 mt-3 mt-md-0">
            <div className="box text-center py-3 px-3">
              <img src={screen} alt="screen" />
              <h2 className="fw_700 fs_20 ff_monts text-white mt-3">
                MONITORING
              </h2>
              <p className="fw_400 fs_16 text-white ff_monts">
                Our cloud-based monitoring platform lets you monitor your mining
                performance, uptime, and rewards.
              </p>
              <a className="fw_500 fs_16 ff_monts text-white" href="#">
                Read More &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
