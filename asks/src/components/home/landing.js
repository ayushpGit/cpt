import video from "../../assets/videos/Raindrops_Videvo.mp4";

const landing = () => {
  return (
    <>
      <video src={video} className="landing-video" muted autoPlay={true} loop></video>
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
    </>
  );
};

export default landing;
