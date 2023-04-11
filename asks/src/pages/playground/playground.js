import React from "react";
import Nav from "../../components/nav";
import Footer from "../../components/footer";

const Playground = () => {
  return (
    <>
      <Nav />
      <div className="container pt-5">
        <div className="row">
          {/* left */}
          <div className="col-lg-6 works-top-left">
            {/* title */}
            <h2 className="sub-heading pb-2">CASE STUDY</h2>
            <h1 className="heading">Better than hotel — Website development</h1>
            {/* role */}
            <h2 className="sub-heading pb-2 pt-5">MY ROLE</h2>
            <ul
              className="bold-text small"
              style={{
                padding: "0",
              }}
            >
              <li>Creative Direction </li>
              <li>UX / UI</li>
              <li>Website Design</li>
              <li>Icon Design</li>
            </ul>
            {/* client */}
            <h2 className="sub-heading pb-2 pt-5">CLIENT</h2>
            <div className="bold-text small">InVision</div>
            {/* year */}
            <h2 className="sub-heading pb-2 pt-5">YEAR</h2>
            <div className="bold-text small">2018 — 2019</div>
          </div>
          {/* right */}
          <div className="col-lg-6 works-top-right">
            <p className="works-p">
              InVision Studio is a new powerful tool where you can design,
              prototype and animate your projects easily. One of InVision's
              initiatives is the Design Forward Fund, a $5 million fund
              dedicated to investing in the future of design. I'm happy to say
              that my idea was among several selected for implementation and
              shortly after the initial interviews, we began shaping
              requirements for the Basic UX project.
            </p>
            <p className="works-p">
              Our goal was to create an extensive library of components and
              assets to help designers wireframe their web projects faster. Over
              the course of 5 months I designed more than 400 layout components
              in 30 categories (each prepared for desktop, tablet & phone
              screens), 128 icons, 56 user journey map elements and over 100
              user interface elements. You can easily customize and combine them
              when working on your wireframes.
            </p>
            <p className="works-p">
              Aside from that, I was in touch with the Director of Product and
              the InVision tech team to report issues and bugs that I found
              within the software, as well as to propose improvements regarding
              certain functionalities. It was exciting to see how the product
              evolved and improved with each update during this short time.
            </p>
            <p className="works-p">
              The final deliverable was a family of 4 products that you can
              download and use for free. Just download InVision Studio, open
              their App Store and search for 128 Outline Icons, eCommerce
              Wireframe Kit, User Interface Kit and Web Wireframe Kit.
            </p>
          </div>
          {/* bottom */}
          <div className="col-12 pt-5">
            <img
              className="subworks-img"
              src={require("../../assets/images/KRI_20230405_nepal bhasa-inside.jpg")}
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Playground;
