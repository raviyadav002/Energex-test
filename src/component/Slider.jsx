import React from "react";
import corona from "../assets/png/corona.png";
import global from "../assets/png/global.png";
import small from "../assets/png/small.png";
import vector from "../assets/png/Vector.png";
import allan from "../assets/png/allan.png";

function Slider() {
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
          className="position-absolute start-0 d-none d-lg-flex"
          src={global}
          alt="global"
        />
        {
          <div className="d-flex justify-content-center align-items-center gap-5">
            <img src={vector} alt="vector" />
            <p className="fw_400 fs_16 ff_monts text-white opacity mx_696">
              {" "}
              Donec et nunc ac est dignissim rhoncus. Cras feugiat leo in diam
              varius, sit amet luctus sapien interdum. Duis et imperdiet metus,
              ut ultricies libero. Vestibulum pharetra leo in dui hendrerit
              pretium tincidunt ut ipsum. Phasellus nec cursus dui. Phasellus
              tristique erat non lacus placerat dapibus. Maecenas accumsan massa
              elit,
            </p>
          </div>
        }{" "}
        <div className="border_le ft">
          <img className="" src={allan} alt="allan" />
        </div>
      </div>
    </section>
  );
}

export default Slider;
