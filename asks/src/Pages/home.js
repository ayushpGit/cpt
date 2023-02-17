import "./pages-style.css";
import Nav from "../components/nav";
// import { Carousel } from "@trendyol-js/react-carousel";
import Carousel from "../components/carousel";
import Footer from "../components/footer";

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

      {/* section 2 */}
      <section id="services" className="mx-auto">
        <Carousel />
      </section>

      {/* section 3 */}
      <section id="mission">
        <img
          src={require("../assets/images/img.jpg")}
          alt=""
          className="bgimg"
        />
        <div className="mission-div">
          <p>&lt;mission&gt;</p>
          <h2 style={{ fontSize: "69px" }}>
            to make technology
            <br></br>an investment for your business
            <br></br>in this digital era
          </h2>
        </div>
      </section>
      {/* section 5 */}
      <section id="Footer">
        <Footer/>
      </section>
    </>
  );
};

export default home;
