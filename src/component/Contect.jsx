import React from "react";
import tele from "../assets/png/tele.png";
import call from "../assets/png/call.png";
import msg from "../assets/png/msg.png";
function Contect() {
  return (
    <section className="py-5 mt-3 form_img">
      <div className="container">
        <h2 className="fw_700 fs_48 ff_monts text-white text-center">
          Contact Us
        </h2>
        <div className="row">
          <div className="col-sm-5">
            <img src={tele} alt="tele" />
            <p className="fw_400 fs_18 ff_monts text-white opacity mt-3">
              Cras eu elementum est, nec commodo <br /> tellus. Praesent
            </p>
            <img className="mt-5" src={call} alt="call" />
            <p className="fw_400 fs_16 ff_monts text-white opacity mt-3">
              Call Us 0934 343 343
            </p>
            <img className="mt-5" src={msg} alt="msg" />
            <p className="fw_400 fs_16 text-white ff_monts opacity mt-3">
              Emailinfo@token.com
            </p>
          </div>
          <div className="col-sm-6">
            <input className="mt-5 " type="text" placeholder="Your Name" />
            <div className="border_left"></div>
            <input className="mt-5" type="text" placeholder="Your Email" />
            <div className="border_left"></div>
            <input className="mt-5" type="text" placeholder="Your Message" />
            <div className="border_left"></div>
            <a
              className="fw_700 fs_16 ff_monts text-white mt-5 btn border-0 rounded-5"
              href="#"
            >
              SEND MESSAGE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contect;
