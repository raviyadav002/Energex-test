import React from "react";
import energy from "../assets/png/energy.png";
import insta1 from "../assets/png/insta1.png";
import discord1 from "../assets/png/discord1.png";
import twiter1 from "../assets/png/twiter1.png";

function Footer() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center">
          <img src={energy} alt="energy" />
          <p className="fw_400 fs_16 ff_monts text-black opacity">
            Donec et nunc ac est dignissim rhoncus. Cras feugiat leo in iam
            varius, sit amet luctus sapien{" "}
          </p>
          <ul className="d-flex gap-3 justify-content-center">
            <li>
              <a className="fw_600 fs_16 ff_monts color_2012" href="#">
                HOME
              </a>
            </li>
            <li>
              <a className="fw_600 fs_16 ff_monts color_2012" href="#">
                ABOUT
              </a>
            </li>
            <li>
              <a className="fw_600 fs_16 ff_monts color_2012" href="#">
                HOSTING SERVICES
              </a>
            </li>
            <li>
              <a className="fw_600 fs_16 ff_monts color_2012" href="#">
                TESTIMONIAL
              </a>
            </li>
          </ul>
          <div className="d-flex gap-3 justify-content-center">
            <a href="#">
              {" "}
              <img src={insta1} alt="insta1" />
            </a>

            <a href="#">
              {" "}
              <img src={discord1} alt="discord1" />
            </a>

            <a href="#">
              <img src={twiter1} alt="twiter1" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-top mt-5"></div>
      <p className="text-center mt-4 fw_400 fs_14 ff_monts text-black opacity">
        @copyright2022
      </p>
    </section>
  );
}

export default Footer;
