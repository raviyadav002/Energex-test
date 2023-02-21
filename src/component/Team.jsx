import React from "react";
import glow from "../assets/png/glow.png";
import denis from "../assets/png/denis.png";
import carlos from "../assets/png/carlos.png";
import ronal from "../assets/png/ronal.png";
function Team() {
  return (
    <section>
      <div className="container">
        <h2 className="text-center fw_700 fs_48 ff_monts color_2012">
          Our Team
        </h2>
        <div className="row justify-content-center mt-3">
          <div className="col-sm-6 col-md-3">
            <div className="box2 rounded-4">
              <img className="w-100" src={glow} alt="glow" />
              <div className="p-1">
                <h2 className="fw_400 fs_20 ff_monts text-white text-center">
                  Daniel Castro
                </h2>
                <p className="fw_400 fs_16 ff_monts text-white text-center">
                  {" "}
                  CEO & Lead Blockchain
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="box2 rounded-4">
              <img className="w-100" src={denis} alt="denis" />
              <div className="p-1">
                <h2 className="fw_400 fs_20 ff_monts text-white text-center">
                  Alvaro Deniss
                </h2>
                <p className="fw_400 fs_16 ff_monts text-white text-center">
                  {" "}
                  Blochain App Developer
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="box2 rounded-4">
              <img className="w-100" src={carlos} alt="carlos" />
              <div className="p-1">
                <h2 className="fw_400 fs_20 ff_monts text-white text-center">
                  Carlos Ronaldo
                </h2>
                <p className="fw_400 fs_16 ff_monts text-white text-center">
                  {" "}
                  Community Management
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="box2 rounded-4">
              <img className="w-100" src={ronal} alt="ronal" />
              <div className="p-1">
                <h2 className="fw_400 fs_20 ff_monts text-white text-center">
                  Carlos Ronaldo
                </h2>
                <p className="fw_400 fs_16 ff_monts text-white text-center">
                  {" "}
                  Community Management
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
