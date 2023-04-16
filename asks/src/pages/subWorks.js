import React, { useEffect } from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { useParams } from "react-router-dom";
import useFetch from "../components/usefuls/useFetch";

const SubWorks = () => {
  const { id } = useParams();
  const { data: work, error } = useFetch("http://localhost:8000/works/" + id);

  const images = [
    {
      id: "1",
      img: "2023_04_12_Mockup1_Hivelaya",
    },
    {
      id: "2",
      img: "2023_04_12_Mockup2_Hivelaya",
    },
    {
      id: "3",
      img: "2023_04_12_Mockup3_Hivelaya",
    },
    {
      id: "4",
      img: "2023_04_12_Mockup1_BetterthanhotelLaptop",
    },
    {
      id: "5",
      img: "2023_04_12_Mockup2_BetterthanhotelLaptop",
    },
    {
      id: "6",
      img: "2023_04_12_Mockup3_BetterthanhotelLaptop",
    },
  ];

  return (
    <>
      <Nav />
      {work ? (
        <div className="container pt-5">
          <div className="row">
            {/* left */}
            <div className="col-lg-6 works-top-left">
              {/* title */}
              <h2 className="sub-heading pb-2 caps">{work.category}</h2>
              <h1 className="heading capital">
                {work.title} — {work.titleDesc}
              </h1>
              {/* role */}
              <h2 className="sub-heading pb-2 pt-5 caps">Our role</h2>
              <ul
                className="bold-text small capital"
                style={{
                  padding: "0",
                }}
              >
                <li>
                  Creative Direction
                  <br />
                  {work.role}
                </li>
              </ul>
              {/* client */}
              <h2 className="sub-heading pb-2 pt-5 caps">Client</h2>
              <div className="bold-text small">{work.title}</div>
              {/* year */}
              <h2 className="sub-heading pb-2 pt-5 caps">Year</h2>
              <div className="bold-text small">{work.date}</div>
            </div>

            {/* right */}
            <div className="col-lg-6 works-top-right">
              <p className="works-p">{work.desc}</p>
            </div>

            {/* bottom */}
            <div className="col-12 pt-5">
              <img
                className="subworks-img"
                src={require(`../assets/images/${work.img}-inside.jpg`)}
                alt=""
              />
              {/* images from the data dictionary */}
              {images.map((image) => (
                <img
                  className="subworks-img"
                  src={require(`../assets/images/${image.img}.jpg`)}
                  alt=""
                />
              ))}
            </div>
          </div>
        </div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <p>Loading...</p>
      )}

      <Footer />
    </>
  );
};

export default SubWorks;
