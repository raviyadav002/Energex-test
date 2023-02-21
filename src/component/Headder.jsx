import React, { useState } from "react";
import img from "../assets/png/img.png";
import man_img from "../assets/png/man_img.png";
import fan from "../assets/png/fan.png";
import insta from "../assets/png/insta.png";
import discord from "../assets/png/discord.png";
import twiter from "../assets/png/twiter.png";
function Headder() {
  const [name, setName] = useState(false);
  if (name) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  return (
    <>
      <section className="bg_header d-flex flex-column  min-vh-100">
        {" "}
        <nav className="bg_nav py-3">
          <div className="container ">
            <div className="d-flex  pb-0 align-items-center justify-content-end">
              <div
                onClick={() => setName(true)}
                className="navdot d-md-none pt-2"
              >
                <div className="navmanu"></div>
                <div className="navmanu my-2"></div>
                <div className="navmanu"></div>
              </div>
              <ul
                data-aos-duration="1000"
                data-aos="fade-down-left"
                className="d-md-flex d-none align-items-center ps-0 mb-0"
              >
                <li className="">
                  <a
                    className="text-decoration-none ff_monts fs_16 fw_400 me-lg-5 me-4 before position-relative text-white text_h   line"
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li className="">
                  <a
                    className="text-decoration-none ff_monts fs_16 fw_400 me-lg-5 me-4 before position-relative text-white text_h  line"
                    href="#popular"
                  >
                    About Us
                  </a>
                </li>
                <li className="">
                  <a
                    className="text-decoration-none ff_monts fs_16 fw_400 me-lg-5 me-4 before position-relative text-white text_h  line "
                    href="#travelaes"
                  >
                    HOSTING SERVICES
                  </a>
                </li>
                <li className="">
                  <a
                    className="text-decoration-none ff_monts fs_16 fw_400 me-lg-5 me-4 before position-relative text-white text_h  line "
                    href="#memories"
                  >
                    TESTIMONIAL
                  </a>
                </li>
                <a href="#">
                  <img src={insta} alt="insta" />
                </a>
                <a href="#">
                  <img src={discord} alt="discord" />
                </a>
                <a href="#">
                  <img src={twiter} alt="twiter" />
                </a>
                <a
                  className="fw_700 fs_16 ff_monts text-white ms-5 btn border-0 rounded-5"
                  href="#"
                >
                  LOG IN
                </a>
              </ul>
            </div>

            <div className={`${name ? "show" : "hide"}`}>
              <a
                onClick={() => setName(false)}
                className="d-md-none text-decoration-none d-flex justify-content-end me-3 "
                href="#"
              >
                <img className="position-absolute1" src={img} alt="img" />
              </a>

              <ul className="d-md-none d-flex flex-column justify-content-center min-vh-100 align-items-center ps-0 mb-0 gap-4">
                <li className="">
                  <a
                    onClick={() => setName(false)}
                    className="text-decoration-none ff_g fs_18 fw_400 text-white  position-relative line d-inline "
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="">
                  <a
                    onClick={() => setName(false)}
                    className="text-decoration-none ff_g fs_18 fw_400 text-white  position-relative line d-inline "
                    href="#"
                  >
                    About Us
                  </a>
                </li>
                <li className="">
                  <a
                    onClick={() => setName(false)}
                    className="text-decoration-none ff_g fs_18 fw_400 text-white  position-relative line d-inline "
                    href="#"
                  >
                    HOSTING SERVICES
                  </a>
                </li>
                <li className="">
                  <a
                    onClick={() => setName(false)}
                    className="text-decoration-none ff_g fs_18 fw_400 text-white  position-relative line d-inline"
                    href="#"
                  >
                    TESTIMONIAL
                  </a>
                </li>
              </ul>
            </div>
            <div className="border-bootom mt-2"></div>
          </div>{" "}
        </nav>
        <div className="d-flex py-5 flex-column flex-grow-1 justify-content-center">
          <div className="container position-relative">
            <img
              className="position-absolute top d-none d-lg-flex"
              src={fan}
              alt="fan"
            />
            <div className="row align-items-center">
              <div className="col-sm-6">
                <h2 className="fw_700 fs_74 text-white ff_monts">
                  Energy Guys gone Crypto
                </h2>
                <p className="fw_400 fs_16 text-white ff_monts">
                  Proin odio arcu, vulputate ut mi non, malesuada egestas arcu.
                  Vivamus ultricies ante sit amet ante molestie,{" "}
                </p>
                <div className="d-flex align-items-center gap-3">
                  <a
                    className="fw_700 fs_16 ff_monts text-white btn border-0 rounded-5"
                    href="#"
                  >
                    CONTACT US
                  </a>
                  <a
                    className="fw_700 fs_16 ff_monts text-white rounded-5 bor"
                    href="#"
                  >
                    READ MORE
                  </a>
                </div>
              </div>
              <div className="col-sm-6">
                <img className="w-100" src={man_img} alt="man_img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Headder;
