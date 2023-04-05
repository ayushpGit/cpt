import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Cards = () => {
  const cardItems = [
    // add filter
    {
      date: "2023",
      title: "Silver lining",
      desc: "brochure design/printing",
      category: "print",
      img: "KRI_20230405_silverlining-small",
      link: "/subworks",
    },
    {
      date: "2023",
      title: "Hivelaya",
      desc: "Social Media Posts",
      category: "dm",
      img: "KRI_20230405_ig-post-small",
      link: "/subworks",
    },
    {
      date: "2022",
      title: "Better than hotel",
      desc: "Website development",
      category: "web",
      img: "KRI_20230405_bth-web-small",
      link: "/subworks",
    },
    {
      date: "2022",
      title: "Better than hotel",
      desc: "Mobile App",
      category: "app",
      img: "KRI_20230405_BTH-small",
      link: "/subworks",
    },
    {
      date: "2015",
      title: "Learn Newari",
      desc: "Mobile App",
      category: "app",
      img: "KRI_20230405_nepal bhasa-small",
      link: "/subworks",
    },
    {
      date: "2016",
      title: "My Fit",
      desc: "Mobile App",
      category: "app",
      img: "KRI_20230405_my-fit-small",
      link: "/subworks",
    },
  ];
  const sortCardItems = [...cardItems].sort((a, b) => b.date - a.date);

  return (
    <div className="works-cards row">
      {sortCardItems.map((cardItem) => (
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
