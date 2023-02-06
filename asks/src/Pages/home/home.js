import "./home.css";
import Nav from "../../components/nav/nav";

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
            <a href="#!" className="link-button">digital portfolio</a>
          </div>
          <div className="col-md-6 text-center">
            <a href="#!" className="link-button dig-home">contact us</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default home;
