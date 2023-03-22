import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
// import Footer from "../assets/images/KRI_20230320_web.jpg";

const Works = () => {
  const cardItems = [
    {
      img: "KRI_20230320_web",
      title: "Website development",
    },
    {
      img: "KRI_20230314_brochure design",
      title: "brochure design/printing",
    },
  ];

  return (
    <>
      <Nav />
      <div className="container pt-5">
        <div
          style={{
            paddingRight: "15px",
            paddingLeft: "15px",
          }}
        >
          <p className="sub-heading">SELECTED PROJECTS</p>
          <h1 className="heading">Digital Portfolio</h1>
        </div>

        <div className="works-cards">
          {cardItems.map((cardItem) => (
            <div className="works-card col-md-6">
              <img
                className="works-card-img"
                src={require("../assets/images/" + cardItem.img + ".jpg")}
                alt=""
              />
              <h1>{cardItem.title}</h1>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Works;
