import React from "react";

const footer = () => {
  return (
    <>
      <div className="footer-div-top">
        <h1>
          <span className="font-bold">That idea you have,</span>
          <br></br>Let’s start working on it
        </h1>
      </div>
      <div className="footer-div-bottom">
        <a
          href="mailto:projects@crocuspearl.com"
          style={{ fontSize: "27px", marginBottom: "20px" }}
        >
          projects@crocuspearl.com
        </a>
        <div className="row footer-row-middle">
          <div className="col-md-5">
            khusibun,
            <br></br>kathmandu, nepal
          </div>
          <a
            href="https://www.facebook.com/people/Crocus-Pearl-Technologies-Pvt-Ltd/100088528600904/?mibextid=ZbWKwL"
            className="link-button col-md-1"
            target={"_blank"}
          >
            facebook
          </a>
          <a
            href="https://www.instagram.com/crocus.pearl/"
            className="link-button col-md-2 text-center"
            target={"_blank"}
          >
            instagram
          </a>
          <a
            href="https://www.linkedin.com/company/crocus-pearl-technologies-pvt-ltd/mycompany/"
            className="link-button col-md-1 text-right"
            target={"_blank"}
          >
            linkedin
          </a>
        </div>
        <div className="row footer-row-bottom">
          <div className="col-md-5">privacy policy</div>
          <div className="col-md-7">
            Copyright owned by Crocus Pearl Technologies. All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default footer;
