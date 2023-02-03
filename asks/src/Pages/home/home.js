import "./home.css";
import Nav from "../../components/nav/nav";

const home = () => {
  return (
    <>
      <Nav />
      {/* section 1 */}
      <div className="">
        <span className="home-title">
          empower
          <br />
          your business
          <br />
          with our digital solutions
        </span>
      </div>
    </>
  );
};

export default home;
