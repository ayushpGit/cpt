import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Cards = () => {
  const cardItems = [
    // add filter
    {
      date: "2023",
      title: "Silver lining",
      titleDesc: "brochure design/printing",
      category: "print",
      img: "KRI_20230405_silverlining-small",
      link: "/subworks",
    },
    {
      date: "2023",
      title: "Hivelaya",
      titleDesc: "Social Media Posts",
      category: "dm",
      img: "KRI_20230405_ig-post-small",
      link: "/subworks",
    },
    {
      date: "2022",
      title: "Better than hotel",
      titleDesc: "Website development",
      category: "web",
      img: "KRI_20230405_bth-web-small",
      link: "/subworks",
    },
    {
      date: "2022",
      title: "Better than hotel",
      titleDesc: "Mobile App",
      category: "app",
      img: "KRI_20230405_BTH-small",
      link: "/subworks",
    },
    {
      date: "2015",
      title: "Learn Newari",
      titleDesc: "Mobile App",
      category: "app",
      img: "KRI_20230405_nepal bhasa-small",
      link: "/subworks",
    },
    {
      date: "2016",
      title: "My Fit",
      titleDesc: "Mobile App",
      category: "app",
      img: "KRI_20230405_my-fit-small",
      desc: [
        `InVision Studio is a new powerful tool where you can design,
      prototype and animate your projects easily. One of InVision's
      initiatives is the Design Forward Fund, a $5 million fund
      dedicated to investing in the future of design. I'm happy to say
      that my idea was among several selected for implementation and
      shortly after the initial interviews, we began shaping
      requirements for the Basic UX project.`,
        `Our goal was to create an extensive library of components and
      assets to help designers wireframe their web projects faster. Over
      the course of 5 months I designed more than 400 layout components
      in 30 categories (each prepared for desktop, tablet & phone
      screens), 128 icons, 56 user journey map elements and over 100
      user interface elements. You can easily customize and combine them
      when working on your wireframes.`,
        `Aside from that, I was in touch with the Director of Product and
      the InVision tech team to report issues and bugs that I found
      within the software, as well as to propose improvements regarding
      certain functionalities. It was exciting to see how the product
      evolved and improved with each update during this short time.`,
        `The final deliverable was a family of 4 products that you can
      download and use for free. Just download InVision Studio, open
      their App Store and search for 128 Outline Icons, eCommerce
      Wireframe Kit, User Interface Kit and Web Wireframe Kit.`,
      ],
      link: "/playground",
    },
  ];
  // const sortCardItems = [...cardItems].sort((a, b) => b.date - a.date);

  return (
    <div className="works-cards row">
      {cardItems.map((cardItem, index) => (
        <a href={`/work/${index + 1}`} className="col-md-6">
          <div className="works-card">
            <img
              className="works-card-img"
              src={require("../../assets/images/" + cardItem.img + ".jpg")}
              alt=""
            />
            <div className="works-card-content">
              <p className="sub-heading">{cardItem.date}</p>
              <h1 className="heading mt-3">
                {cardItem.title} - {cardItem.titleDesc}
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
