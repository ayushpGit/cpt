import React, { Component, useState, useEffect } from "react";
import Slider from "react-slick";
import motion from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./playground.css";

const Playground = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  console.log(mousePosition);

  useEffect(() => {
    const mouseMove = (e) => {
      console.log(e);
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default:{
      
    }
  }

  const settings = {
    arrows: false,
    className: "center",
    centerMode: true,
    infinite: true,
    // centerPadding: "100px",
    slidesToShow: 1,
    speed: 500,
  };

  return (
    <div>
      <motion.div className="cursor" variants={variants} />
      <Slider {...settings}>
        <div className="carousel-div">
          <img
            className="carousel-img"
            src={require("../../assets/images/img.jpg")}
            alt="service img"
          />
          <div className="container-fluid">
            <div className="row ">
              <div className="col-md-1 carousel-num">01</div>
              <div className="col-md-4">
                <h2 className="service-title">&lt;Digital Marketing&gt;</h2>
                <p>
                  we help individuals understand the effectiveness of their
                  marketing campaigns, allowing them to make data-driven
                  decisions
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-div hah">
          <img
            className="carousel-img"
            src={require("../../assets/images/img.jpg")}
            alt="service img"
          />
          <div className="container-fluid">
            <div className="row ">
              <div className="col-md-1 carousel-num">02</div>
              <div className="col-md-4">
                <h2 className="service-title">&lt;Website Development&gt;</h2>
                <p>
                  we help individuals understand the effectiveness of their
                  marketing campaigns, allowing them to make data-driven
                  decisions
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-div hah">
          <img
            className="carousel-img"
            src={require("../../assets/images/img.jpg")}
            alt="service img"
          />
          <div className="container-fluid">
            <div className="row ">
              <div className="col-md-1 carousel-num">03</div>
              <div className="col-md-4">
                <h2 className="service-title">&lt;Digital Marketing&gt;</h2>
                <p>
                  we help individuals understand the effectiveness of their
                  marketing campaigns, allowing them to make data-driven
                  decisions
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Playground;
