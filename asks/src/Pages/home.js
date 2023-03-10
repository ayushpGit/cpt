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
      {/* section 1 */}
      <section id="top" className="container">
        <Landing />
      </section>

      {/* section 2 */}
      <section
        id="services"
        className="mx-auto"
        onMouseEnter={dragEnter}
        onMouseLeave={dragLeave}
      >
        <Carousel />
      </section>

      {/* section 3 */}
      <section id="mission">
        <Mission />
      </section>

      {/* section 5 */}
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
