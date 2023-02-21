import React from "react";
import traced from "../assets/png/traced.png";
import lock from "../assets/png/lock.png";
import cart from "../assets/png/cart.png";
function Work() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-4">
            <h2 className="fw_700 fs_48 ff_monts color_2012">How It Works</h2>
            <p className="fw-400 fs-16 ff_monts opacity text-black">
              Energex is a cryptocurrency mining company focused in Appalachia
              (PA, OH, WV). Our management team combines 20 years of experience
              in gas operations, engineering, and IT management. Our breadth of
              experience in the natural gas space allows us to deliver vast
              amounts of low cost power with high uptime, maximizing mining
              profitability
            </p>
            <div className="mt-4">
              <a
                className="fw_700 fs_16 ff_monts text-white btn border-0 rounded-5"
                href="#"
              >
                LEARN MORE
              </a>
            </div>
          </div>
          <div className="col-md-7">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="shadow">
                  <img src={traced} alt="traced" />
                  <h2 className="fw_700 fs_20 color_2012 ff_monts">
                    Create Account
                  </h2>
                  <p className="fw_400 fs_16 text-black opacity ff_monts">
                    Donec et nunc ac est dignissim rhoncus. Cras feugiat leo in
                    iam varius, sit amet luctus sapien interdum. Duis et{" "}
                  </p>
                </div>
                <div className="mt-3">
                  <div className="shadow">
                    <img src={cart} alt="cart" />
                    <h2 className="fw_700 fs_20 color_2012 ff_monts">
                      Buy & Sell
                    </h2>
                    <p className="fw_400 fs_16 text-black opacity ff_monts">
                      Donec et nunc ac est dignissim rhoncus. Cras feugiat leo
                      in iam varius, sit amet luctus sapien interdum. Duis et{" "}
                    </p>
                  </div>
                </div>{" "}
              </div>
              {/* <div> */}
              <div className="col-sm-6 mt-3 mt-sm-0">
                <div className="shadow">
                  <img src={lock} alt="lock" />
                  <h2 className="fw_700 fs_20 color_2012 ff_monts">
                    Safe & Secure
                  </h2>
                  <p className="fw_400 fs_16 text-black opacity ff_monts">
                    Donec et nunc ac est dignissim rhoncus. Cras feugiat leo in
                    iam varius, sit amet luctus sapien interdum. Duis et{" "}
                  </p>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
