import "./pages-style.css";
import Nav from "../components/nav";
// import { Carousel } from "@trendyol-js/react-carousel";
import Landing from "../components/home/landing";
import Mission from "../components/home/mission";
import Carousel from "../components/home/carousel";
import Footer from "../components/footer";

const home = ({ dragEnter, dragLeave }) => {
  return (
    <>
      <Nav />

      {/* top section */}
      <section id="top" className="container">
        <Landing />
      </section>

      {/* services section */}
      <section
        id="services"
        className="mx-auto"
        onMouseEnter={dragEnter}
        onMouseLeave={dragLeave}
      >
        <Carousel />
      </section>

      {/* mission section */}
      <section id="mission">
        <Mission />
      </section>

      {/* footer section */}
      <section id="footer">
        <Footer
          email="projects@crocuspearl.com"
          locationTop="khusibun,"
          locationBottom="kathmandu, nepal"
        />
      </section>
    </>
  );
};

export default home;
