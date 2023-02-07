/* eslint-disable @next/next/no-img-element */
import React from "react";
import featuresEffect from "../../common/featuresEffect";
import { thumparallaxDown } from "../../common/thumparallax";
import Split from "../Split";

const MinimalArea = () => {
  React.useEffect(() => {
    featuresEffect();
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/min-area.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              {/* <Split>
                <h4
                  className="wow custom-font words chars splitting"
                  data-splitting
                >
                  About us.
                </h4>
              </Split> */}

              {/* <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  Our creative Ad agency is ranked among the finest in the US.
                  We cultivate smart ideas for start-ups and seasoned players.
                </p>
              </Split> */}
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>1</span> Our Mission
                  </h6>
                  <p>
                  We are on a mission to execute excellence in creating customized digital marketing strategies that can make big differences in the performance of brands at their best and striving harder to retain for being the best internet marketing agency in Kochi, Kerala.


                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                    <span>2</span> Our Vision
                  </h6>
                  <p>
                  We envision being the best digital marketing company as well as the best online marketing partner for every client, who can generate ROI for any business regardless of its sector, size, and segment.

</p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6>
                    <span>3</span> Why Us?
                  </h6>
                  <p>
                  Waywedesign provides multifaceted and tailored online marketing solutions to our prestigious clients. We regularly check with our clients to ensure their advertisements get positive results and get ROI for their business. We will inspire and captivate your target audience by providing them with branded content, attractive creatives, and modern responsive websites to make sure your business becomes the ‘Talk of the Town’. </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
