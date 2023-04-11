import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const Cards = ({ workItems }) => {
  return (
    <div className="works-cards row">
      {workItems.map((workItem) => (
        <Link to={workItem.link} className="col-md-6">
          <div className="works-card">
            <img
              className="works-card-img"
              src={require("../../assets/images/" + workItem.img + ".jpg")}
              alt=""
            />
            <div className="works-card-content">
              <p className="sub-heading">{workItem.date}</p>
              <h1 className="heading mt-3">
                {workItem.title} - {workItem.titleDesc}
              </h1>
              <p className="works-card-learn sub-heading mt-4">
                Learn More
                <AiOutlineArrowRight />
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
