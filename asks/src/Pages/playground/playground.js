import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./playground.css";
// import DragEnter from "./DragEnter";
// import DragLeave from "./DragLeave";

const Playground = () => {
  // Slideeeeeeeeeeeee things
  const settings = {
    arrows: false,
    className: "center",
    centerMode: true,
    infinite: true,
    // centerPadding: "100px",
    slidesToShow: 1,
    speed: 500,
  };

  const services = [
    {
      num: "01",
      title: "digital marketing",
      desc: "we help individuals understand the effectiveness of their marketing campaigns, allowing them to make data-driven decisions",
      img: "a",
    },
    {
      num: "02",
      title: "website development",
      desc: "we help in creating beautiful websites with excellent user experience while also catering to all age groups and target audience",
      img: "d",
    },
    {
      num: "03",
      title: "printing",
      desc: "we print business cards, brochures, posters, and other various materials as per the requirements of clients at a reasonable price. ",
      img: "c",
    },
  ];

  return (
    <div>
      <Slider {...settings}>
        {services.map((service) => (
          <div className="carousel-div">
            <img
              className="carousel-img"
              src={require("../../assets/images/" + service.img + ".jpg")}
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
      </Slider>
      <div className="aaa">AAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH</div>
    </div>
  );
};

export default Playground;
