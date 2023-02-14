import "./home.css";
import Nav from "../../components/nav/nav";
// import { Carousel } from "@trendyol-js/react-carousel";
import Carousel from "../../components/carousel/carousel";

const home = () => {
  return (
    <>
      <Nav />
      {/* section 1 */}
      <section id="top" className="container">
        <span className="home-title">
          empower
          <br />
          your business
          <br />
          with our digital solutions
        </span>
        <div className="row link-div">
          <div className="col-md-6 text-center">
            <a href="#!" className="link-button">
              digital portfolio
            </a>
          </div>
          <div className="col-md-6 text-center">
              <a href="#!" className="link-button">
              contact us
            </a>
          </div>
        </div>
      </section>
      <section id="services" className="mx-auto">
        <Carousel />
        {/* <HorizontalScroll> */}
        {/* <Carousel show={1.4} swiping={true}>
          <div className="home-service-div">
            <img
              className="home-service-img"
              src={require("../../assets/images/img.jpg")}
              alt="service img"
            />
            <div className="container-fluid">
              <div className="row ">
                <div className="col-md-1"></div>
                <div className="col-md-1 home-service-num">01</div>
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
          <div className="home-service-div">
            <img
              className="home-service-img"
              src={require("../../assets/images/img.jpg")}
              alt="service img"
            />
            <div className="container-fluid">
              <div className="row ">
                <div className="col-md-1"></div>
                <div className="col-md-1 home-service-num">02</div>
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
          <div className="home-service-div">
            <img
              className="home-service-img"
              src={require("../../assets/images/img.jpg")}
              alt="service img"
            />
            <div className="container-fluid">
              <div className="row ">
                <div className="col-md-1"></div>
                <div className="col-md-1 home-service-num">03</div>
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
        </Carousel> */}
        {/* </HorizontalScroll> */}
      </section>
    </>
  );
};

export default home;
