import "./pages-style.css";
import Nav from "../components/nav/nav";
// import { Carousel } from "@trendyol-js/react-carousel";
import Carousel from "../components/carousel";

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
      </section>
      <section id="mission">
        <img src={require("../assets/images/img.jpg")} alt="" className="bgimg"/>
      </section>
    </>
  );
};

export default home;
