import React from "react";
import video from "../../assets/videos/video.mp4";

const landing = () => {
  return (
    <section id="top" className="container">
      <video
        src={video}
        className="landing-video"
        muted
        autoPlay={true}
        loop
      ></video>
      <span className="home-title">
        empower
        <br />
        your business
        <br />
        with our digital solutions
      </span>
      <div className="row link-div">
        <div className="col-md-6 text-center">
          <a href="#!" className="link-button white">
            digital portfolio
          </a>
        </div>
        <div className="col-md-6 text-center">
          <a href="#!" className="link-button white">
            contact us
          </a>
        </div>
      </div>
    </section>
  );
};

export default landing;
