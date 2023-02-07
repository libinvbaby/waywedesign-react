import React from "react";
import Split from "../Split";

const AboutIntro = (props) => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="htit sm-mb30 text-center pb-4">
              <h4>{props.title}
</h4>
            </div>
          </div>
          <div className="col-lg-12  col-md-12">
            <div className="text">
              <Split>
                <p className="  text-justify wow txt words chars splitting mb-3" data-splitting>{props.content}
                 </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
