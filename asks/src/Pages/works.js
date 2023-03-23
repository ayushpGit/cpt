import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
// import Footer from "../assets/images/KRI_20230320_web.jpg";

const Works = () => {
  const cardItems = [
    // add date, category, filter
    {
      date: "2016",
      title: "Better than hotel",
      desc: "Website development",
      category: "web",
      img: "KRI_20230320_web",
      link: "/",
    },
    {
      date: "2016",
      title: "Silver lining",
      desc: "brochure design/printing",
      category: "print",
      img: "KRI_20230314_brochure design",
      link: "/",
    },
    {
      date: "2016",
      title: "Better than hotel",
      desc: "App",
      category: "app",
      img: "KRI_20230316_app",
      link: "/",
    },
    {
      date: "2016",
      title: "Posts",
      desc: "Social Media Posts",
      category: "dm",
      img: "KRI_20230321_posts1",
      link: "/",
    },
  ];

  return (
    <>
      <Nav />
      <div className="container pt-5">
        <p className="sub-heading">SELECTED PROJECTS</p>
        <h1 className="heading" style={{ fontSize: "6rem" }}>
          Digital Portfolio
        </h1>

        <div className="works-cards row">
          {cardItems.map((cardItem) => (
            <>
              <a href={cardItem.link} className="col-md-6">
                <div className="works-card">
                  <img
                    className="works-card-img"
                    src={require("../assets/images/" + cardItem.img + ".jpg")}
                    alt=""
                  />
                  <div className="works-card-content">
                    <p className="sub-heading">{cardItem.date}</p>
                    <h1 className="heading">
                      {cardItem.title} - {cardItem.desc}
                    </h1>
                  </div>
                </div>
              </a>
            </>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Works;
