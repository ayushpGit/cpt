import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Cards = () => {
  const cardItems = [
    // add filter
    {
      date: "2023",
      title: "Better than hotel",
      desc: "Website development",
      category: "web",
      img: "KRI_20230320_web",
      link: "/",
    },
    {
      date: "2022",
      title: "Silver lining",
      desc: "brochure design/printing",
      category: "print",
      img: "KRI_20230314_brochure design",
      link: "/",
    },
    {
      date: "2023",
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
    <div className="works-cards row">
      {cardItems.map((cardItem) => (
        <a href={cardItem.link} className="col-md-6">
          <div className="works-card">
            <img
              className="works-card-img"
              src={require("../../assets/images/" + cardItem.img + ".jpg")}
              alt=""
            />
            <div className="works-card-content">
              <p className="sub-heading">{cardItem.date}</p>
              <h1 className="heading mt-3">
                {cardItem.title} - {cardItem.desc}
              </h1>
              <p className="works-card-learn sub-heading mt-4">
                Learn More
                <AiOutlineArrowRight />
              </p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Cards;
