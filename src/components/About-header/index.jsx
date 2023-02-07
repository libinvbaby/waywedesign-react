import React from "react";

const AboutHeader = (props) => {
  
  return (
 
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cont text-center">
              <h2>{props.title}</h2>
              <div className="path">
                <a href="#0">Home</a>
                <span>/</span>
                <a href="#0" className="active">
                  {props.page}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
};

export default AboutHeader;
