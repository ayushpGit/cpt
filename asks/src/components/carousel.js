// import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./components-style.css";

export default function Carousel() {
  const settings = {
    arrows: false,
    className: "center",
    centerMode: true,
    infinite: false,
    // centerPadding: "100px",
    slidesToShow: 1,
    speed: 500,
  };

  const services = [
    {
      num: "01",
      title: "Digital Marketing",
      desc: "we help individuals understand the effectiveness of their marketing campaigns, allowing them to make data-driven decisions",
      img: "img",
    },
    {
      num: "02",
      title: "Website Development",
      desc: "we help in creating beautiful websites with excellent user experience while also catering to all age groups and target audience",
      img: "img",
    },
    {
      num: "03",
      title: "Printing ",
      desc: "We print business cards, brochures, posters, and other various materials as per the requirements of clients at a reasonable price. ",
      img: "img",
    },
  ];

  return (
    <div>
      <Slider {...settings}>
        {services.map((service) => (
          <div className="carousel-div">
            <img
              className="carousel-img"
              src={require("../assets/images/"+ service.img +".jpg")}
              alt="service img"
            />
            <div className="container-fluid">
              <div className="row ">
                <div className="col-md-1 carousel-num">{service.num}</div>
                <div className="col-md-4">
                  <h2 className="service-title">&lt;{service.title}&gt;</h2>
                  <p>{service.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* <div className="carousel-div">
          <img
            className="carousel-img"
            src={require("../assets/images/img.jpg")}
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

        <div className="carousel-div">
          <img
            className="carousel-img"
            src={require("../assets/images/img.jpg")}
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

        <div className="carousel-div">
          <img
            className="carousel-img"
            src={require("../assets/images/img.jpg")}
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
        </div> */}
      </Slider>
    </div>
  );
}
