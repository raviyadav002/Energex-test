import React from "react";
import speaker from "../assets/png/speaker.png";
function Future() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center">
          <p className="fw_700 fs_20 ff_monts color_2012">OUR FEATURE</p>
          <h2 className="fw_700 fs_48 ff_monts color_2012">Featured ASICs</h2>
        </div>
        <div className="row mt-5 justify-content-center">
          <div className="col-md-4 col-sm-6">
            <div className="box1">
              <img className="w-100" src={speaker} alt="speaker" />
              <div className="d-flex mt-3 align-items-center justify-content-between">
                <p className="fs_20 fw_700 mb-0 ff_monts color_2012">
                  Goldshell HS5
                </p>
                <div className="d-flex">
                  <p className="fs_16 fw_400 mb-0 ff_monts ">2.7 TH/s /</p>
                  <p className="fs_16 mb-0 fw_400 ff_monts ">2650w</p>
                </div>
              </div>
              <h3 className="fs_24 fw_600 ff_monts color_f53 mt-2">$6,2536</h3>
              <div className="d-flex align-items-center gap-3">
                <a
                  className="fw_700 fs_16 ff_monts text-white btn1 border-0 rounded-5"
                  href="#"
                >
                  SHOP NOW
                </a>
                <a className="fw_700 fs_16 ff_monts rounded-5 bor1" href="#">
                  DETAILS
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="box1">
              <img className="w-100" src={speaker} alt="speaker" />
              <div className="d-flex mt-3 align-items-center justify-content-between">
                <p className="fs_20 mb-0 fw_700 ff_monts color_2012">
                  Goldshell HS5
                </p>
                <div className="d-flex">
                  <p className="fs_16 fw_400 mb-0 ff_monts ">2.7 TH/s /</p>
                  <p className="fs_16 mb-0 fw_400 ff_monts ">2650w</p>
                </div>
              </div>
              <h3 className="fs_24 fw_600 ff_monts color_f53 mt-2">$6,2536</h3>
              <div className="d-flex align-items-center gap-3">
                <a
                  className="fw_700 fs_16 ff_monts text-white btn1 border-0 rounded-5"
                  href="#"
                >
                  SHOP NOW
                </a>
                <a className="fw_700 fs_16 ff_monts rounded-5 bor1" href="#">
                  DETAILS
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mt-4 mt-md-0">
            <div className="box1">
              <img className="w-100" src={speaker} alt="speaker" />
              <div className="d-flex mt-3 align-items-center justify-content-between">
                <p className="fs_20 mb-0 fw_700 ff_monts color_2012">
                  Goldshell HS5
                </p>
                <div className="d-flex">
                  <p className="fs_16 fw_400 mb-0 ff_monts ">2.7 TH/s /</p>
                  <p className="fs_16 mb-0 fw_400 ff_monts ">2650w</p>
                </div>
              </div>
              <h3 className="fs_24 fw_600 ff_monts color_f53 mt-2">$6,2536</h3>
              <div className="d-flex align-items-center gap-3">
                <a
                  className="fw_700 fs_16 ff_monts text-white btn1 border-0 rounded-5"
                  href="#"
                >
                  SHOP NOW
                </a>
                <a className="fw_700 fs_16 ff_monts rounded-5 bor1" href="#">
                  DETAILS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Future;
